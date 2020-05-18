import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Grid, CircularProgress} from '@material-ui/core'
import {NavLink, Redirect} from 'react-router-dom'
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
      const reDirect=this.props.isLoggedIn?<div></div>:<Redirect to="/signin"></Redirect>
        const posts=this.props.posts;
      console.log(this.props.posts)
        const postList=(posts && posts.length)? posts.map((post)=>{
           return( 
            
            <Grid item key={post.id} xs={12} sm={6} md={4} style={{paddingTop:40}}>
   <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="160"
          image= {URL=post.imagetag}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {post.Title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {post.Description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <Button size="medium" color="secondary" variant="contained" >
        <NavLink to={"/posts/"+post.id} style={{textDecoration:"none"}}> + Read More..</NavLink>
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
                {reDirect}             
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    posts: state.firestore.ordered.Blogs,
    isLoggedIn: state.auth.isLoggedIn
   } 

}

const mapDispatchToProps = {
    
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
firestoreConnect([
  {collection: 'Blogs'}
])
    )(Home)
