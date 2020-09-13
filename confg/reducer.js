import { DUMY_IMAGES } from "./data";
import {createSlice} from '@reduxjs/toolkit' 

const root=createSlice({
  name:'posts',
  initialState:{
    places: DUMY_IMAGES,
    place: ''
  },
  reducers:{
    getPost:{
      reducer(state,action){
        state.place =action.payload
      }
    }
  }
  
})

export const {getPost}= root.actions;
export default  root.reducer