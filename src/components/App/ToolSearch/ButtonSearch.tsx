import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

/**
 * Кнопка поиска
 */
const ButtonSearch = () => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="center">
      <Button variant="contained" color="primary" type="submit">
        Поиск
      </Button>
    </Box>
  );
};

export default ButtonSearch;
