import {TypedUseSelectorHook, useSelector as reduxUseSelector} from "react-redux";
import {RootState} from "../store/reducers";

export const useSelector: TypedUseSelectorHook<RootState> = reduxUseSelector;
