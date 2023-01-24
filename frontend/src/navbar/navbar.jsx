import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logout } from "../redux/auth/auth.action"

export const Navbar = ()=>{
    const isAuth = useSelector((store)=>store.auths.isAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(isAuth)
    const handleClick = ()=>{
        if(isAuth){
            dispatch(logout())
        }
        else{
            navigate("/login")
        }
    }
    return(
        <div>
           <Link to = "/">Home</Link>
           {" "}
           <Link to = "/signup">SignUp</Link>
           {" "}
           <Link to = "/login">Login</Link>
           {" "}
           <Link to = "/about">About</Link>
           {" "}
           <button onClick = {handleClick}>{isAuth ? "LOGOUT" : "LOGIN"}</button>
           
        </div>
    )
}