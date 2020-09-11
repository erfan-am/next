import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  imageList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "90%",
    height: "90%"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));
