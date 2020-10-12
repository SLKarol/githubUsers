import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import { HandleSearch } from "types/types";
import InputSearch from "./InputSearch";

interface Props {
  onSearch: () => void;
  searchString: string;
  setSearchString: HandleSearch;
}

const useStyles = makeStyles((theme) => ({
  component: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

const ToolSearch = ({ onSearch, searchString, setSearchString }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.component}>
      <Container maxWidth="sm">
        <InputSearch
          onSearch={onSearch}
          searchString={searchString}
          setSearchString={setSearchString}
        />
      </Container>
    </div>
  );
};

export default ToolSearch;
