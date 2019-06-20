import { createStore } from 'redux';

import reducers from './ducks';

const tronMiddleware = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer : () => {};

const store = createStore(reducers, tronMiddleware());

export default store;
