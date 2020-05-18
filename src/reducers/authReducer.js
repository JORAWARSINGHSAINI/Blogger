const authReducer=(state=initState,action)=>{
    switch(action.type){
        case "Login_Success":
            state.authError=false
            state.isLoggedIn=true
        console.log("USER Logged In")
        return state
        case "Error_Login":
            console.log("Error")
            state.authError=true
            return state;
            case "Signout_Success":
                console.log("Signout Success")
                state.isLoggedIn=false
                return state;
            case "Signout_Failure":
                console.log("Signout Failure")
                return state;
            case "Signup_Success":
                console.log("Signup Success")
                state.isLoggedIn=true
                return state;
            case "Signup_Failed":
            console.log(action.err)
            return state
        default:
            return state;
    }
}

const initState={
    authError:false,
    isLoggedIn:false
}
export default authReducer