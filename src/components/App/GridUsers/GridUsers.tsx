import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Pagination from "@material-ui/lab/Pagination";

import { NodesUser } from "types/types";
import CardUser from "./CardUser";
import CountFind from "./CountFind";

interface Props {
  userCount: number;
  nodes: NodesUser[];
  page: number;
  onChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  paging: {
    marginTop: theme.spacing(2),
  },
}));

/**
 * Вывод сетки пользователей
 */
const GridUsers = ({ userCount, nodes, page, onChangePage }: Props) => {
  const classes = useStyles();
  // todo исправить запрос
  const users = nodes.filter((u) => u.__typename === "User");
  const addOne = userCount % 9 > 1 ? 1 : 0;
  const countPages = Math.trunc(userCount / 9) + addOne;
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <CountFind count={userCount} />
      <Grid container spacing={4}>
        {users.map((card) => (
          <Grid key={card.id} xs={12} sm={6} md={4} item>
            <CardUser {...card} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        page={page}
        count={countPages}
        color="primary"
        className={classes.paging}
        onChange={onChangePage}
      />
    </Container>
  );
};

export default GridUsers;
