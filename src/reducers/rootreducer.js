import {combineReducers} from "redux";
import animeListReducer from  "./animeListReducer"
import animeMultipleReducer from "./animeMultipleReducer"
import locationReducer from "./locationReducer"
import episodesReducer from "./episodesReducer"

const RootReducer = combineReducers({
    animeList : animeListReducer,
    anime: animeMultipleReducer,
    location: locationReducer,
    episodes: episodesReducer,
});

export default RootReducer;