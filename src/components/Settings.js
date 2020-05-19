import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, ListItem,List,Switch, Divider } from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
export class Settings extends Component {
    render() {
        return (
                <Container component="main" maxWidth="md">
              
                <List>   
              
                <ListItem  style={{paddingTop:15,paddingBottom:15}}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary= "Verify Email" />
            <Switch></Switch>  
          </ListItem>
              
              <Divider/>
              
              <ListItem  style={{paddingTop:15,paddingBottom:15}}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary= "Change UserName" />
            <Switch></Switch>  
         
          </ListItem>
         
          <ListItem  style={{paddingTop:15,paddingBottom:15}}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary= "Change Password" />
            <Switch></Switch>  
          </ListItem>
         
          <ListItem  style={{paddingTop:15,paddingBottom:15}}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary= "Change Profile Picture" />
            <Switch></Switch>  
          </ListItem>
         
          <ListItem  style={{paddingTop:15,paddingBottom:15}}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary= "Verify Email" />
            <Switch></Switch>  
          </ListItem>
         
          <ListItem  style={{paddingTop:15,paddingBottom:15}}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary= "Verify Email" />
            <Switch></Switch>  
          </ListItem>
          </List>

                </Container>
           
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
