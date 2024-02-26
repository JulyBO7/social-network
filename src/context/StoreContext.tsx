import react from "react";
import { store } from "../redux/store-redux";

export const StoreContext = react.createContext(store)