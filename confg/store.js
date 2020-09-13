import {configureStore} from '@reduxjs/toolkit'
import allReducer from './allreducer';
export const store = configureStore({reducer:{
    reduce:allReducer
}});
