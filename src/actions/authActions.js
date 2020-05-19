export const signIn=(credentials)=> {
    return (dispatch,getState, {getFirebase})=>{
        const firebase=getFirebase()
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
        .then(()=>{
            dispatch({
                type: "Login_Success"
            })  
        }).catch((error)=>{
            dispatch({
                type:"Error_Login"
            
            })
        })
        
    }
  }
  

  export const signOut=()=>{
      return (dispatch,getState,{getFirebase})=>{
          const firebase=getFirebase();
          firebase.auth().signOut()
          .then(()=> dispatch({type:"Signout_Success"}))
          .catch((err)=> dispatch({type:"Signout_Failure"}))
      }
  }

  export const signUp=(credentials)=>{
      return (dispatch,getState,{getFirebase,getFirestore})=>
      {
            const firebase=getFirebase();
            const firestore=getFirestore();
            firebase.auth().createUserWithEmailAndPassword(
                credentials.email,
                credentials.password
            ).then((resp)=>{
                return firestore.collection('users').doc(resp.user.uid).set({
                    firstName: credentials.firstName,
                    lastName: credentials.lastName 
                    
                 }) 
            }).then(()=>dispatch({type:"Signup_Success"}))
            .catch((err)=> dispatch({type:"Signup_Failed",err}))
      }
  }
