import { createStore } from "redux";
import addGarageReducer from './reducers/addGarageReducer';

const store = createStore(addGarageReducer);

export default store;