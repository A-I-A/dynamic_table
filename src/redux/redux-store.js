import { tableReducer } from "./tableReducer";
const { createStore } = require("redux")


const store = createStore(tableReducer);

export default store;

