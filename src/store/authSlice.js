import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {jwtDecode} from "jwt-decode"
import { url, url2 } from './api'
import axios from "axios"


const initialState={
    token:localStorage.getItem("token")||"",
    userId: localStorage.getItem("userId")||"",
    uuid:localStorage.getItem("uuid")||"",
    idIndividu: localStorage.getItem("idIndividu")||"",
    etablissementId: localStorage.getItem("etablissementId")||"",
    expirationDate:localStorage.getItem("expirationDate")||"",      
    userName:localStorage.getItem("userName")||"",
    loginStatus: "",
    loginError: "",
    userLoaded: false,
    isActive: true
}






export const loginStudent = createAsyncThunk(
    "auth/loginSeller",
    async (values, { rejectWithValue }) => {
        try {
            // Make a request to login endpoint with username and password
            const response = await axios.post(url, {
                username: values.username,
                password: values.password
            });

            // Extract token from the response
            const token = response.data.token;

            // Store token in local storage
            localStorage.setItem("token", token);
            localStorage.setItem("uuid", response.data.uuid);


            // Set token in Axios default headers for subsequent requests
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            return token; // Return token value
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
      

logoutStudent(state,action){
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("uuid")
    localStorage.removeItem("etablissementId")
    localStorage.removeItem("expirationDate")
    localStorage.removeItem("userName")
    localStorage.removeItem("idIndividu")

   



    return {
        ...state,
        token:"",
        userId:"",
        uuid:"",
        etablissementId:"",
        expirationDate:"",
        userName:"",
        idIndividu:"",
        loginStatus: "",
        loginError: "",
        userLoaded: false,
        isActive: true

    }
}
    },
    extraReducers:(builder)=>{
        builder

        
        
       

 

        // for login 

        .addCase(loginStudent.pending,(state,action)=>{
            console.log("pending")
            return {...state,loginStatus:"pending"}
        })

        .addCase(loginStudent.fulfilled,(state,action)=>{
            if (action.payload) {                 //we use this verfictation to evide error if token doesn't exist

            const user=jwtDecode(action.payload)
            console.log(user)
            return {
                ...state,
                   token: action.payload,
                   userId: user.userId,
                    uuid: user.uuid,
                   etablissementId:user.etablissementId,
                   expirationDate: user.expirationDate,
                   userName: user.userName,
                   idIndividu:user.idIndividu,
                    loginStatus: "success",
                    
            }


        
        
        }
        else return state
        })

        .addCase(loginStudent.rejected,(state,action)=>{
            return{
                ...state,
                loginStatus:"rejected",
                loginError:action.payload
            }
        })
    }       
})

export const {logoutStudent}=authSlice.actions
export default authSlice.reducer