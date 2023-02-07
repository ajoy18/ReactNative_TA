import { configureStore } from "@reduxjs/toolkit";
import GlobalVariable from "../features/GlobalVariable";

export const store = configureStore({
    reducer:{
        globalVar : GlobalVariable
    }
})