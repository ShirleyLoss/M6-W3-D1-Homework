import * as actions from "./actions";
import { combineReducers } from "redux";

const preferences = (state = { darkThemeEnabledd: false }, action) => {
    switch (action.type) {
        case actions.TOGGLE_DARKTHEME:
            return { ...state, darkThemeEnabled: !state.darkThemeEnabled };
        default:
            return state;
    }
};

export default combineReducers({ preferences });