import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import {signIn} from '../actions/authActions'
import { makeStyles } from '@material-ui/core/styles';
import {useForm} from 'react-hook-form'
import {Redirect} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn(props) {
  const classes = useStyles();
  const [email,setemail]=React.useState("")
  const [password,setpassword]=React.useState("")
  const errorLogin=props.authError?<Typography color="secondary" variant="h5">Try Again!</Typography>:<div></div>
const submitHandler= (event) =>
{
   event.preventDefault()
    const credentials={
      email:email,
      password:password
    }
    props.signIn(credentials)
} 

  const reDirect=props.isLoggedIn?<Redirect to="/"></Redirect>:<div></div>
  return (
    <Container component="main" maxWidth="xs">
      {errorLogin}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={submitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e)=> setemail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e)=> setpassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          
          <Grid container>
            <Grid item xs>
              <NavLink to="/forgotpassword" variant="body2">
                Forgot password?
              </NavLink>
            </Grid>
            <Grid item>
              <NavLink to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      {reDirect} 
    </Container>
    
  );
}

const mapStateToProps=(state)=>{
  return ({
    authError: state.auth.authError,
    isLoggedIn: state.auth.isLoggedIn
  })
}

const mapDispatchToProps =(dispatch)=> ({ 
  signIn: (credentials)=>{dispatch(signIn(credentials))}
})

export default   connect(mapStateToProps, mapDispatchToProps) (SignIn)
