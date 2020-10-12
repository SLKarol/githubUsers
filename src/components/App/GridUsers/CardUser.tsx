import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

import { NodesUser } from "types/types";
import Avatar from "./Avatar";
import UserProp from "./UserProp";

interface Props extends NodesUser {}

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

/**
 * Карточка пользователя
 */
const CardUser = ({
  avatarUrl,
  name,
  bio,
  company,
  location,
  projects,
  repositories,
  url,
  websiteUrl,
}: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Avatar avatarUrl={avatarUrl} name={name} />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography>{bio}</Typography>
        <UserProp caption="location" value={location} />
        <UserProp caption="company" value={company} />
        <UserProp caption="projects" value={projects.totalCount} />
        <UserProp caption="repositories" value={repositories.totalCount} />
        {websiteUrl && (
          <Typography>
            <strong>Website: </strong>
            <Link href={websiteUrl} target="_blank">
              {websiteUrl}
            </Link>
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Link href={url} target="_blank">
          {url}
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardUser;
