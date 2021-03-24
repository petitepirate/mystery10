import { combineReducers } from "redux";
import films from "./films";
import planets from "./planets";
import people from "./people";

//root reducer
export default combineReducers({
  films,
  planets,
  people,
});
