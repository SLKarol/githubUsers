import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import LinearProgress from "@material-ui/core/LinearProgress";

import { ResponseGitHub } from "types/types";
import GridUsers from "components/App/GridUsers/GridUsers";
import ToolSearch from "components/App/ToolSearch/ToolSearch";

/**
 * Запрос поиска пользователей
 */
const SEARCH_USERS = gql`
  query SearchUsers($search: String!, $after: String!) {
    search(type: USER, query: $search, first: 9, after: $after) {
      userCount
      pageInfo {
        startCursor
        endCursor
      }
      nodes {
        ... on User {
          id
          name
          bio
          company
          location
          projects {
            totalCount
          }
          repositories {
            totalCount
          }
          url
          avatarUrl
          websiteUrl
        }
      }
    }
  }
`;

/**
 * Основной компонент приложения
 */
const AppSearch = () => {
  // Подготовка запроса списка пользователей
  const [getUsers, { loading, data }] = useLazyQuery<ResponseGitHub>(
    SEARCH_USERS
  );
  // Страница
  const [page, setPage] = useState(1);
  // Строка поиска
  const [searchString, setSearchString] = useState("");

  /**
   * Функция поиска пользователей
   */
  const onSearch = () => {
    if (!!searchString) {
      setPage(1);
      getUsers({
        variables: { search: searchString, after: btoa("cursor:1") },
      });
    }
  };

  /**
   * Смена номера страницы
   */
  const onChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    const cursor = 1 + (value - 1) * 9;
    console.log("value :>> ", value);
    getUsers({
      variables: { search: searchString, after: btoa(`cursor:${cursor}`) },
    });
  };

  return (
    <>
      <ToolSearch
        onSearch={onSearch}
        searchString={searchString}
        setSearchString={setSearchString}
      />
      {loading ? <LinearProgress color="secondary" /> : null}
      {data ? (
        <GridUsers {...data.search} page={page} onChangePage={onChangePage} />
      ) : null}
    </>
  );
};

export default AppSearch;
