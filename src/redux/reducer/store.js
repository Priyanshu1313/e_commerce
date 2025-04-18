import rootReducers from '.';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer:rootReducers,
})
export default store;