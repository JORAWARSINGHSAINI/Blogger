import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import createNewBlog from '../actions/createNewBlog'
import CreateIcon from '@material-ui/icons/Create';
import Typography from '@material-ui/core/Typography';
import styles from '../Stylesheets/createBlog.module.css'
import Container from '@material-ui/core/Container';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

export class CreateBlog extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Title:"",
             Description:"",
             Author:"",
             upImage: ""
        }
        this.submitHandler=this.submitHandler.bind(this)
        this.changeHandler=this.changeHandler.bind(this)
    }
    changeHandler(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler(event)
    {
        event.preventDefault()
        this.props.createblog(this.state)
        
    } 
    fileHandler=(e)=>{
      this.setState({
          [e.target.name]: e.target.files[0]
      })
  }
    render() {
      console.log(this.props.isError)
      if(this.props.isCreated) return (<Redirect to="/"/>)
        return (
            <div>
                <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={styles.paper}>
        <Avatar >
          <CreateIcon color="secondary"></CreateIcon>
        </Avatar>
        <Typography component="h1" variant="h5">
          Create a Blog
        </Typography>
        <form className={styles.form}  onSubmit={this.submitHandler}>
          <TextField
            variant="outlined" margin="normal"
            required fullWidth
            id="Title"  label="Title"
            name="Title"      autoFocus
            onChange={this.changeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required fullWidth
            name="Author" label="Author"
            type="text" id="author"
            onChange={this.changeHandler}
  
          />
          <TextField
            variant="outlined" margin="normal"
            required multiline
            fullWidth name="Description" label="Desctiption"
            type="text" id="description" rows="8"
            onChange={this.changeHandler}
          />
          <TextField
              
             name="upImage" label="Image"
            type="file" id="image" 
            onChange={this.fileHandler}
          />

             <Button type="submit" fullWidth variant="contained" color="primary" className={styles.submit}
                >
              Create new Blog
          </Button>
        </form>
      </div>
    </Container>
   
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isCreated: state.blogs.isCreated,
    isError:   state.blogs.isError
  })

const mapDispatchToProps =(dispatch)=> ({
    createblog: (project)=>{dispatch(createNewBlog(project))}
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlog)
