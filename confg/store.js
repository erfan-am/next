import {configureStore} from '@reduxjs/toolkit'
import root from './reducer';
export const store = configureStore({reducer:{
    root:root
}});
