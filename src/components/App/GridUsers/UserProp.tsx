import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  caption: {
    textTransform: "capitalize",
  },
}));

interface Props {
  caption: string;
  value: string | number | null;
}

/**
 * Вывести свойство пользователя
 */
const UserProp = ({ caption, value }: Props) => {
  const classes = useStyles();
  if (!value) return null;
  return (
    <Typography>
      <strong className={classes.caption}>{`${caption}: `}</strong>
      {value}
    </Typography>
  );
};

export default UserProp;
