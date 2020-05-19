const authReducer=(state=initState,action)=>{
    switch(action.type){
        case "Login_Success":
        return state
        case "Error_Login":
            console.log("Error")
            return state;
            case "Signout_Success":
                return state;
            case "Signout_Failure":
                return state;
            case "Signup_Success":
                return state;
            case "Signup_Failed":
            console.log(action.err)
            return state
        default:
            return state;
    }
}

const initState={
}
export default authReducer