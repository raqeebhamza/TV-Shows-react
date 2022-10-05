import { combineReducers } from "@reduxjs/toolkit";
import { ShowItem } from "../../components/ListItem";
import { showSliceReducer, stateInterface } from "./showSlice";


export interface IRootReducer{
    showSlice:stateInterface,
}
export const rootReducer=combineReducers<IRootReducer>({
    showSlice:showSliceReducer
})
