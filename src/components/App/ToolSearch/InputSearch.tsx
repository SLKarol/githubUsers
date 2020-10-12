import React from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import { HandleSearch } from "types/types";
import ButtonSearch from "./ButtonSearch";

interface Props {
  onSearch: () => void;
  searchString: string;
  setSearchString: HandleSearch;
}

const useStyles = makeStyles((theme) => ({
  input: {
    flex: 1,
  },
  component: {
    marginBottom: theme.spacing(1),
  },
}));

/**
 * Строка поиска
 */
const InputSearch = ({ onSearch, searchString, setSearchString }: Props) => {
  const classes = useStyles();

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch();
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchString(e.target.value);
  return (
    <form onSubmit={onSubmit}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        className={classes.component}
      >
        <TextField
          label="Поиск"
          className={classes.input}
          error={!searchString}
          value={searchString}
          onChange={onChange}
        />
        <IconButton color="primary" onClick={onSubmit}>
          <SearchIcon />
        </IconButton>
      </Box>
      <ButtonSearch />
    </form>
  );
};

export default InputSearch;
