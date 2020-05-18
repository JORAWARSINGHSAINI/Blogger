import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Grid, Typography} from '@material-ui/core'
import {CircularProgress} from '@material-ui/core'
import {
    FacebookShareButton,
    InstapaperShareButton,
    WhatsappShareButton
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
            <Grid item sm={3} md={7} >
               <Typography variant="h1">{post[0].Description}</Typography>
                <Typography variant="body">{post[0].Description}</Typography>
            </Grid>:
            <div style={{marginLeft:"50%",paddingTop:"350px"}}>
            <CircularProgress color="secondary" ></CircularProgress>
            </div>
            const authorDescription=post?
            <Grid item sm={4} md={4}>
                        {post[0].Author}
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

export default connect(mapStateToProps)(Blog)
