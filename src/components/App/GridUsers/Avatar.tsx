import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  avatarUrl: string | null;
  name: string;
}

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  noAvatar: {
    padding: 0,
  },
}));

/**
 * Аватар пользователя
 */
const Avatar = ({ avatarUrl, name }: Props) => {
  const classes = useStyles();
  if (avatarUrl)
    return (
      <CardMedia className={classes.cardMedia} image={avatarUrl} title={name} />
    );
  return (
    <Typography className={classes.noAvatar} color="textSecondary">
      Нет аватары
    </Typography>
  );
};

export default Avatar;
