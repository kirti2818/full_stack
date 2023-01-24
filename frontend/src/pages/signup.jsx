import { useState } from "react"
import { signup } from "../redux/auth/auth.action";

export const SignUp = ()=>{
    const [signupCreds , setSignupCreds] = useState({}) 
    const handleChange = (e)=>{
      const { name , value } = e.target;
       setSignupCreds({
        ...signupCreds ,
        [name]:value
       })

    }
    console.log(signupCreds)

    const handleSubmit = (e)=>{
  e.preventDefault()
  signup(signupCreds)

    }
    return(
        <div> <h1>Signup Page</h1>
        <form>
        <div>
        <input name = "email" onChange = {handleChange} type = "email" placeholder="Email" />
        </div>
        <div>
        <input name = "username" onChange = {handleChange} type = "text" placeholder="Username" />
        </div>
        <div>
        <input name = "password" onChange = {handleChange} type = "password" placeholder="Password" />
        </div>
        <div>
        <input name = "confirmpassword" onChange = {handleChange} type = "password" placeholder="Confirm Password" />
        </div>
        <div>
        <input name = "location" onChange = {handleChange} type = "text" placeholder="Location" />
        </div>
        <div>
        <input name = "role" onChange = {handleChange} type = "text" placeholder="Role" />
        </div>
        <div>
        <input name = "DOB" onChange = {handleChange} type = "number" placeholder="DOB" />
        </div>
        <div>
            <input onClick = {handleSubmit} type="submit" value = "Sign Up" />
        </div>
        </form>
         </div>

    )
}