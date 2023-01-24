import { useState } from "react"
import { login } from "../redux/auth/auth.action"
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Login = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuth = useSelector((store)=>store.auths.isAuth)
    console.log(isAuth)
    const [loginCreds , setLoginCreds] = useState({})
    const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log("login")
        dispatch(login(loginCreds))
    }
    useEffect(()=>{
      if(isAuth){
        navigate("/")
      }
    },[isAuth])
    
    const handleChange = (e)=>{
      const { name , value} = e.target
      setLoginCreds(
        {
            ...loginCreds , [name] : value
        }
      )

    }
    console.log(loginCreds)
    return(
        <div> 
            <form >
            <div>
            <input name = "username" onChange={handleChange} placeholder="Username" type = "type"/>
            </div>
           <div>
           <input name = "password" onChange={handleChange} placeholder="Password" type = "password"/>
           </div>

            <input onClick = {handleSubmit}  type = "submit" value = "Login"/>
            </form>
        </div>
    )
}