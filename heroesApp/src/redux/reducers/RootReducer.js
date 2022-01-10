import { combineReducers } from "redux";
import HeroReducer from "./HeroReducer";

const RootReducer = combineReducers({
    heroState : HeroReducer
})

export default RootReducer;