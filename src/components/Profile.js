import React from 'react'
import { connect } from 'react-redux'
import { Avatar, Container, List, CircularProgress } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ReportIcon from '@material-ui/icons/Report';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
    
    
  }));

  
   

function Profile(props)  {
    const [open, setOpen] = React.useState(true);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
 
    const dialog=(name)=>
    {
        console.log("dialog")
      return(  <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Change</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the new {name} to change it.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={name}
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      )
    }
    
    const classes = useStyles();
       console.log(props.user)

            if(!props.user) return <div style={{marginLeft:"5",marginTop:"300px"}}>
                <CircularProgress color="secondary"></CircularProgress>
            </div>
        return (
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                <Avatar className={classes.avatar} alt="Remy Sharp" src={props.user.photoURL}/>
            <List>
                <ListItem>
                    <ListItemText>First Name</ListItemText><br></br>
                    <ListItemText>{props.details.firstName}</ListItemText>
                    <EditIcon onClick={()=>dialog("First Name")}></EditIcon>
                </ListItem>
                <ListItem>
                     <ListItemText>Last Name</ListItemText>
                    <ListItemText>{props.details.lastName}</ListItemText>
                    <EditIcon onClick={()=>dialog("Last Name")}></EditIcon>
                </ListItem>
                <ListItem>
                     <ListItemText>Email</ListItemText>
                    <ListItemText>{props.user.email}</ListItemText>
                    {props.user.emailVerified?
                    <VerifiedUserIcon></VerifiedUserIcon>:<ReportIcon></ReportIcon>}
                </ListItem>
                <ListItem>
                     <ListItemText>Phoner</ListItemText>
                    <ListItemText>{props.user.phoneNumber?props.user.phoneNumber:"Not uploaded!"}</ListItemText>
                    <EditIcon></EditIcon>
                </ListItem>

            </List>
            </div>
            </Container>
        )
    
}


const mapStateToProps = (state) => {

    return {
      user:state.firebase.auth,
      details:state.firebase.profile
     } 
  
  }



export default connect(mapStateToProps)(Profile)
