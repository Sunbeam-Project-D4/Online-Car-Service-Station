// src/redux/reducers/basenameReducer.js
import { SET_BASENAME } from "../constants/basenameConstants";

const initialState = {
    basename: "",
};

export const basenameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BASENAME:
            return {
                ...state,
                basename: action.payload,
            };
        default:
            return state;
    }
};
