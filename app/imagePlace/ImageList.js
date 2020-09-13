import React from "react";
import { useStyles } from "./imageCss";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";
import Avatar from "@material-ui/core/Avatar";
import { getPost } from "../../confg/reducer";
import {useDispatch} from 'react-redux'

const TitlebarGridList = ({ items, history }) => {
  const classes = useStyles();
  const date = new Date().getFullYear();
  const dispatch=useDispatch()
  const placeHandler = (item) => {
    history.push(`/users/${item.id}`);
    dispatch(getPost(item));
  };
  return (
    <div className={classes.imageList}>
      <GridList cellHeight={300} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">{date}</ListSubheader>
        </GridListTile>
        {items &&
          items.map((item) => (
            <GridListTile key={item.id}>
              <img src={item.image} alt={item.place} />
              <GridListTileBar
                title={item.place}
                subtitle={<span>by: @{item.creator}</span>}
                actionIcon={
                  <IconButton
                    onClick={() => placeHandler(item)}
                    aria-label={`info about ${item.place}`}
                    className={classes.icon}
                  >
                    <Avatar aria-label="recipe" src={item.creatorImg} />
                    <h2>{item.likes}</h2>
                    <StarIcon style={{ color: "gold" }} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
      </GridList>
    </div>
  );
};

export default TitlebarGridList;
