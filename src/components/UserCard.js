import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import { Link } from "@material-ui/core";

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

function UserCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
 
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 
    let str = `${props.data.name}`;
    let acronym = str.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')
    
    console.log(acronym);
  
  return (
      <div>
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
           { acronym}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.data.name}
        subheader={`Joined ${new Date(props.data.created_at).toUTCString()}`}
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
    <h3> I have {props.data.followers} followers on github check them below </h3>
    </div>
  );
}
export default UserCard;
