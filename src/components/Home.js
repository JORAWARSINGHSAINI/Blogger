import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Grid, CircularProgress} from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import {Typography} from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

export class Home extends Component {
    render() {
     
       
      const posts=this.props.posts;
        const postList=(posts && posts.length)? posts.map((post,index)=>{
           return( 
            
            <Grid item key={post.id} xs={12} sm={6} md={4} style={{paddingTop:40}}>
   <Card >
      <CardActionArea>
      <NavLink to={"/posts/"+post.id} style={{textDecoration:"none", color:"black"}} >
        <CardMedia
          component="img"
          alt="Image"
          height="250"
          image= {(index%2===0? "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrFPBxMX2R86CMXEExnl_lrDEA5mflbzM3Cu2O-2v-l7_BLaAI&usqp=CAU")}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {post.Title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {post.Description.substr(0,20)+"...."}
          </Typography>
        </CardContent>
        </NavLink>
      </CardActionArea>
      <CardActions>

        <Button size="medium" color="secondary" variant="contained" >
        <NavLink to={"/posts/"+post.id} style={{textDecoration:"none", color:"white"}} > + Read More..</NavLink>
        </Button>
      </CardActions>
    </Card>
    </Grid>
    ) 
        })
        
        :
        <div style={{marginLeft:"50%",paddingTop:"350px"}}>
            <CircularProgress color="secondary" ></CircularProgress>
        </div>
        
        return (
            <div>
                <Grid container spacing={4} >
                   {postList}
                </Grid>   
                           
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.Blogs,
   
   } 

}

export default compose(
  connect(mapStateToProps),
firestoreConnect([
  {collection: 'Blogs',orderBy:['createdAt','desc']}
])
    )(Home)
