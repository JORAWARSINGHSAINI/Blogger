const blogReducer=(state=initState,action)=>{
    switch(action.type){
        case "ADD_BLOG":
        console.log("Created project")
        return state
        case "ERROR_ADD":
            console.log(action.error)
            return state;
        default:
            return state;
    }
}
const initState={
    posts:[
    {id:1,
    Title:"Hello WOrld",
    Description: "ya dfhds fjsdfj ds",
    author: "Jorawar Singh",
    tag: "World",
    imagetag:"https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"


},
{
    id:2,
    Title:"Hello WOrld 2",
    Description: "ya dfhdssdf ds fsd ds fjsdfj ds",
    author: "Jorawar Singh",
    tag: "Corona",
    imagetag:"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"

},
{
    id:3,
    Title:"Hello WOrld 3",
    Description: "ya dfhsdfasdfds fjsdfj ds",
    author: "Jorawar Singh",
    tag: "Sports",
    imagetag:"https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"

},
{
    id:4,
    Title:"Sports",
    Description: "ya dfhsdfasdfds fjsdfj ds",
    author: "Jorawar Singh",
    tag: "Sports",
    imagetag:"https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"

},
{
    id:5,
    Title:"Polictics",
    Description: "yasdfasdfsfa dfdfsdf dfhsdfasdfds fjsdfj ds",
    author: "Jorawar Singh",
    tag: "Sports",
    imagetag:"https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"

},
{
    id:6,
    Title:"Hello WOrld 3",
    Description: "ya dfhsdfasdfds fjsdfj ds",
    author: "Jorawar Singh",
    tag: "Corona",
    imagetag: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"

}
    ]}

export default blogReducer