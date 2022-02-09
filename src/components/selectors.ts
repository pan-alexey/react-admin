import { RootState } from "../store/reducers";


export const getUser = (store: RootState) => {
    return store.user
}

export const getTodo = (store: RootState) => {
    return store.todo
}