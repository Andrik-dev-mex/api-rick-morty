import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Brightness1Icon from '@material-ui/icons/Brightness1';


const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    height: 435,
    width: 300,
    textAlign: "left"
    },
  media: {
    height: 150,
  },
});

const TarjetaPersonaje = ({
  index,
  id,
  name,
  status,
  species,
  gender,
  image,
  location,
}) => {
  const classes = useStyles();

  const [like, setLike] = useState(0);
  
  let color = () => {
    if(status === "Alive"){
      return "green";
    } else if (status === "Dead"){
      return "red";
    } else {
      return "";
    }
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <Brightness1Icon
              style = {{color: color(), fontSize : 10 + "px"}}
            /> 
            {status}-{species}
          </Typography>
          <Typography variant = "h5" component = "h1">
            Gender
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {gender}
          </Typography>
          <Typography variant = "h5" component = "h1">
            Location
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {location}  
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            variant = "contained"
            color = "secondary"
            onClick = {() => {setLike(like + 1)}}>
            Me Gusta
          </Button>
          <Button>
            <ThumbUpAltIcon/> + {like}
          </Button>
        </CardActions>     
      </CardActionArea>
    </Card>
  );
};

export default TarjetaPersonaje;
