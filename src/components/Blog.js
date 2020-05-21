import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Grid, Typography, CssBaseline, Avatar, CardMedia} from '@material-ui/core'
import {CircularProgress} from '@material-ui/core'
import { Rating } from '@material-ui/lab';
import { firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

import {
    FacebookShareButton,
    InstapaperShareButton,
    WhatsappShareButton,
    EmailShareButton
  } from "react-share";
  import {
    EmailIcon,
    FacebookIcon,
    InstapaperIcon,
    WhatsappIcon
  } from "react-share";

export class Blog extends Component {
       render() {
        
      
           const post=this.props.post
          
            const BlogDescription=post?
            <Grid item sm={4} md={8} style={{borderRight: "2px solid black"}}>
                <CardMedia
          component="img"
          alt="Image"
          height="350"
          paddingTop= "60px"
          image= { "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"}
          title="Image"
        />
               <Typography variant="h3" >{post[0].Title}</Typography>
               <Rating ></Rating>
               <CssBaseline></CssBaseline>
                <Typography variant="subtitle1">{post[0].Description}</Typography>
            </Grid>:
            <div style={{marginLeft:"50%",paddingTop:"350px"}}>
            <CircularProgress color="secondary" ></CircularProgress>
            </div>

            const authorDescription=post?
            <Grid item sm={4} md={4}>
                   <Typography variant="h5" color="inherit">{post[0].Author}</Typography>     
                  <EmailShareButton url={"http://localhost/"+this.props.location.pathname}>
                      <EmailIcon size={40} round={true}></EmailIcon>
                  </EmailShareButton>
                  <FacebookShareButton url={"http://localhost/"+this.props.location.pathname}>
                      <FacebookIcon size={40} round={true}></FacebookIcon>
                  </FacebookShareButton>
                  <WhatsappShareButton url={"http://localhost/"+this.props.location.pathname}>
                    <WhatsappIcon size={40} round={true}></WhatsappIcon>
                  </WhatsappShareButton>
                  <InstapaperShareButton url={"http://localhost/"+this.props.location.pathname}>
                  <InstapaperIcon size={40} round={true} ></InstapaperIcon>
                  </InstapaperShareButton>
                  </Grid>
                  :
                  <div></div>
        return (
            <div>
              <Grid container>
                  {BlogDescription}
                  {authorDescription}
                </Grid>
             
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
  
const blog=state.firestore.ordered.Blogs?state.firestore.ordered.Blogs.filter((post)=>post.id===ownProps.match.params.id):false
return{
    post: blog
}
}

export default compose(
  connect(mapStateToProps),
firestoreConnect([
  {collection: 'Blogs'}
])
    )(Blog)

