import { createStore } from "redux";
import rootreducer  from "../reducers/rootreducer";

export const ReduxStoreConfig = () => {
    const store = createStore(rootreducer);

    return store;
}