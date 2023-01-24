import { Route, Routes } from "react-router-dom"
import { About } from "../pages/about"
import { Home } from "../pages/home"
import { Login } from "../pages/login"
import { SignUp } from "../pages/signup"

export const Routing = ()=>{
    return(
        <Routes>
            <Route path = "/" element = {<Home/>} />
            <Route path = "/login" element = {<Login/>} />
            <Route path = "/signup" element = {<SignUp/>} />
            <Route path = "/about" element = {<About/>} />
        </Routes>
    )
}