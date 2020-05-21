function createNewBlog(project) {
    return (dispatch,getState, {getFirebase,getFirestore})=>{
        console.log(project)
        const firestore=getFirestore()
        firestore.collection('Blogs').add({
           
            Title: project.state.Title,
            Description: project.state.Description,
            Type: project.state.Type,
            Author:project.Author,
            createdAt: new Date()
        }).then((resp)=>{
          console.log(resp) 
        }).then(()=>{
            dispatch({
                type: "ADD_BLOG",
                project
            })  
        }).catch((error)=>{
            dispatch({
                type:"ERROR_ADD",
                error
            })
        })
        
    }
  }
  export default createNewBlog