import { LOGIN, LOGOUT } from "./auth.type";

let token = localStorage.getItem("token")

const initialState = {
    isAuth : !!token,
    token : token

}
console.log(initialState.isAuth)
export const authReducer = (state = initialState , action)=>{
   switch(action.type){
    case LOGIN:{
        localStorage.setItem("token" , action.payload)
        return {
            ...state,
            isAuth:true,
            token : action.payload
        }
    }
        case LOGOUT:{
            localStorage.removeItem("token")
            return {
                ...state,
                isAuth:false,
                token : ""
            }
    }
    default :{
        return state;
    }
   }
}