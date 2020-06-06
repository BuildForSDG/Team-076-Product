import { createStore } from "redux";
import rootreducer from "../reducers/rootreducer";

export const reduxStoreConfig = () => {
  const store = createStore(rootreducer);

  return store;
};
