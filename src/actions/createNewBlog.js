function createNewBlog(project) {
    return (dispatch,getState, {getFirebase,getFirestore})=>{
        const firestore=getFirestore()
        firestore.collection('Blogs').add({
            ...project,
            Title: project.Title,
            Description: project.Description,
            Author: project.Author,
            createdAt: new Date()
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