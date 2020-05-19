function createNewBlog(project) {
    return (dispatch,getState, {getFirebase,getFirestore})=>{
        const firestore=getFirestore()
        firestore.collection('Blogs').add({
           
            Title: project.Title,
            Description: project.Description,
            Author: project.Author,
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