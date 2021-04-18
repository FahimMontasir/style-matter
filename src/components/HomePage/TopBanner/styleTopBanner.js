import { makeStyles } from "@material-ui/core";
import bannerImg from "../../../images/banner.jpg"

export const useStyle = makeStyles(() => ({
  root: {
    width: "100%",
    height: 500,
    backgroundImage: `url(${bannerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white"
  },
  home: {
    marginRight: "auto"
  },
  heroContainer: {
    marginTop: 20,
    textAlign: "center"
  },
  logo: {
    width: 200,
    height: 200
  }
}));
