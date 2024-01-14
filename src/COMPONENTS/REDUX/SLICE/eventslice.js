import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState ={
    data:[],
    reply:{},
    loading:false,
    error:false

}

export const register = createAsyncThunk('register',async(userData)=>{
    try{
        const responce = await axios.post('http://127.0.0.1:8000/api/Registerapi',userData)
        return responce.data.data
    }catch (error){
        console.log(error);
    }
})


export const loginapi = createAsyncThunk('loginapi',async(userData)=>{
    try{
        const responce = await axios.post('http://127.0.0.1:8000/api/loginAPI',userData)
        return responce.data.data
    }catch (error){
        console.log(error);
    }
})

export const filterrr = createAsyncThunk('filterrr',async(userData)=>{
    try{
        const responce = await axios.post('http://127.0.0.1:8000/api/filtermethod',userData)
        console.log(responce,"filter");
        return responce.data.data
    }catch (error){
        console.log(error);
    }
})


export const eventSlice = createSlice({
    name:'event',
    initialState,
    extraReducers:(builder)=>{
        //register
        builder.addCase(register.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(register.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(register.rejected,(state,action)=>{
            state.loading = false
            state.error = true
        })

        // login
        builder.addCase(loginapi.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(loginapi.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(loginapi.rejected,(state,action)=>{
            state.loading = false
            state.error = true
        })



        // filter
        builder.addCase(filterrr.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(filterrr.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(filterrr.rejected,(state,action)=>{
            state.loading = false
            state.error = true
        })

    }


}) 

export default eventSlice.reducer