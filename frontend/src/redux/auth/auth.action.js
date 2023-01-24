import axios from "axios";
import { LOGIN, LOGOUT } from "./auth.type";

export const login = (creds)=>async(dispatch)=>{
  console.log(creds)
  let response = await axios.post("http://localhost:8083/users/login",creds)
  let data = response.data
  // console.log(data)
  
  if(data.token){
    return dispatch({type:LOGIN,payload : data.token})
  }else{
    console.log(data)
  }
  // console.log(data.token)
}
export const logout = ()=>({type: LOGOUT})

export const signup = async(creds)=>{
  console.log(creds)
  let response = await axios.post("http://localhost:8083/users/signup",creds)
  let data = response.data
  console.log(data)
}
// export 