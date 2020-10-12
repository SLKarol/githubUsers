import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import AppSearch from "components/App/AppSearch";

interface Props {}

const App = (props: Props) => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Поиск пользователей github
          </Typography>
        </Toolbar>
      </AppBar>
      <AppSearch />
    </>
  );
};

export default App;
