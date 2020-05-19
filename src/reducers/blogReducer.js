const blogReducer=(state=initState,action)=>{
    switch(action.type){
        case "ADD_BLOG":
            state.isCreated=true
            state.isError=false
            return state
        case "ERROR_ADD":
            state.isError=true
            state.isCreated=false    
            console.log(action.error)
            return state;
        default:
            return state;
    }
}
const initState={
isCreated: false,
isError:   false
}

export default blogReducer