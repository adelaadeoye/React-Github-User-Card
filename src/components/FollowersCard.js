import React, {useState} from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CodeIcon from "@material-ui/icons/Code";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "85%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

function FollowersCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
    const [follow, setFollow]= useState("")
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  
    axios
    .get(`https://api.github.com/users/${props.data.login}`)
    .then(res => {
      setFollow(res.data)
     
      console.log(this.state.user)

    })
    .catch(err => console.log(err));
    let str = `${follow.name}`;
  let acronym = str
    .split(/\s/)
    .reduce((response, word) => (response += word.slice(0, 1)), "");
  return (
    <div className="follow">
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {acronym}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={follow.name}
          subheader={`Joined ${new Date(follow.created_at).toUTCString()}`}
        />
        <CardMedia
          className={classes.media}
          image={props.data.avatar_url}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data.bio}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Link href={props.data.html_url}>
            <IconButton aria-label="share">
              <CodeIcon />
            </IconButton>
          </Link>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
          
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

      </Card>
    </div>
  );
}
export default FollowersCard;
