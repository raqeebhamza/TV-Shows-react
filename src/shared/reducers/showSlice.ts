import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from 'semantic-ui-react';
export interface ShowItem{
    image:any;
    name:string;
    id:number;
    genres:[];
    status:string;
    rating:any;
    officalSite:string;
    summary:string;
}
export interface stateInterface {
    items:ShowItem[]
    currentItem?:any
}
const initialState:stateInterface={
    items:[],
    currentItem:undefined
}

const showSlice=createSlice({
    name:'showSlice',
    initialState:initialState,
    reducers:{
        getCurrentShows:state=>{

        },
        setShows:(state, action: PayloadAction<ShowItem[]>)=>{
            const { payload }=action;
            state.items=payload;
        },
        getShowById:(state, action: PayloadAction<number>)=>{
            const { payload }=action; 
            const filteredItem = state.items.filter((item)=>item.id==payload)[0]
            if(filteredItem!==undefined){
                state.currentItem = filteredItem
            }
        }
    }

})

const { getCurrentShows,setShows,getShowById} = showSlice.actions;
const showSliceReducer = showSlice.reducer;
//   export actions and reducer for
export { getCurrentShows, setShows,getShowById, showSliceReducer };
