// src/redux/actions/basenameActions.js
import { SET_BASENAME } from "../constants/basenameConstants";

export const setBasename = (basename) => ({
    type: SET_BASENAME,
    payload: basename,
});
