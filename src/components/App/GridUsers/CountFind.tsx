import React from "react";
import Typography from "@material-ui/core/Typography";

interface Props {
  count: number;
}

/**
 * Вывод количества найденных пользователей
 */
const CountFind = ({ count }: Props) => {
  return (
    <Typography gutterBottom variant="h5" component="h2">
      {`Найдено: ${count}`}
    </Typography>
  );
};

export default CountFind;
