import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootreducer from "../reducers/rootreducer";

export const reduxStoreConfig = () => {
  const store = createStore(rootreducer,applyMiddleware(thunk));

  return store;
};
