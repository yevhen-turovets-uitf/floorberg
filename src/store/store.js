import { configureStore } from '@reduxjs/toolkit';

import { objectList, objectDetailed } from './root-reducer';

const store = configureStore({
  reducer: {
    objectList,
    objectDetailed
  }
});

export default store;
