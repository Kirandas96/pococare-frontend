import * as types from "./actionTypes"
import axios from "axios"



export const getSignUp=(payload)=>(dispatch)=>{
    dispatch({type:types.SIGN_REQUEST})
    return axios.post("http://localhost:5000/auth/signup",payload)
    .then((res)=>{
    
        console.log(res.data)
        if(res.data.error===true){
            dispatch({type:types.SIGN_FAILURE},payload=res.data.message)
            return false
        }
        else{
            dispatch({type:types.SIGN_SUCCESS})
            return true
        }
        // console.log(res)
    })
    .catch(()=>dispatch({type:types.SIGN_FAILURE,payload:"Network Error"}))
}
export const getLogin=(payload)=>(dispatch)=>{
    dispatch({type:types.LOGIN_REQUEST})
    return axios.post(`http://localhost:5000/auth/login`,payload)
    .then((res)=>{

        // console.log(res,"as")
        if(res.data.message=="login successfull"){
            dispatch({type:types.LOGIN_SUCCESS,payload:res.data[0]})
            return true
        }
        else{
            return false
        }
        
    })
    .catch(dispatch({type:types.LOGIN_FAILURE,payload:"Network Error"}))
}

