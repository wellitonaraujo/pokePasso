import { createStore } from "redux";

import reducer from './modules/pokemoon/reducer';

const store = createStore(reducer)

export default store;