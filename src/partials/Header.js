import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import LeftDrawer from '../components/LeftDrawer';
import {NavLink} from 'react-router-dom';
import  {signOut} from '../actions/authActions'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import {connect} from 'react-redux'
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  
const logoutHandler=()=>{
  handleMenuClose()
  console.log(props)
  props.signOut()

}

  const menuId = 'primary-search-account-menu';
  let renderMenu;
    if(props.isLoggedIn){
      renderMenu=<Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >

        <MenuItem onClick={handleMenuClose}><NavLink to="/profile" style={{ textDecoration: 'none',color:"black"}}>Profile</NavLink></MenuItem>
        <MenuItem onClick={handleMenuClose}><NavLink to="/account" style={{ textDecoration: 'none',color:"black"}}>Account</NavLink></MenuItem>
        <MenuItem onClick={handleMenuClose}><NavLink to="/settings" style={{ textDecoration: 'none',color:"black"}}>Settings</NavLink></MenuItem>
        <MenuItem onClick={logoutHandler} >LogOut</MenuItem>
        </Menu>  
      }
    else{
      renderMenu=<Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <NavLink to="/signup" style={{ textDecoration: 'none',color:"black"}}>
        <MenuItem onClick={handleMenuClose}>SignUp</MenuItem>
        </NavLink>
        <NavLink to="/signIn" style={{ textDecoration: 'none',color:"black"}}>
        <MenuItem onClick={handleMenuClose}>SignIn</MenuItem>
        </NavLink>
        </Menu>  
    }
      
   let searchMenu;
   if(props.isLoggedIn)
   {
     searchMenu=(<div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'Search Blog' }}
      />
    </div>)
   } 
  const mobileMenuId = 'primary-search-account-menu-mobile';
  let renderMobileMenu;
  if(props.isLoggedIn){
    renderMobileMenu= (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge  color="secondary">
              <AddCircleRoundedIcon/>
            </Badge>
          </IconButton>
          <p>Create Blog</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
  } 
  else{
    renderMobileMenu= (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge  color="secondary">
              <AddCircleRoundedIcon/>
            </Badge>
          </IconButton>
          <p>LogIn</p>
        </MenuItem>

        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge  color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>SignIN</p>
        </MenuItem>
</Menu>
    );
  }
  let loginIcons;
  if(props.isLoggedIn)
  {
    loginIcons=(<div className={classes.sectionDesktop}>
        <NavLink to="/createBlog" style={{color:"white"}}>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge  color="secondary">
            <AddCircleRoundedIcon  />
            </Badge>
          </IconButton>
          </NavLink>

          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          
        </div>)
  }
  return (
    <div className={classes.grow}>
      
      <AppBar position="static" color="secondary">
        <Toolbar>
        <LeftDrawer></LeftDrawer>
          <NavLink to="/" style={{textDecoration:'none',color:"white"}}>
          <Typography className={classes.title} variant="h6" noWrap>
            Blogger App
          </Typography>
          </NavLink>
          {searchMenu}
         
          <div className={classes.grow} />
          {loginIcons}
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

const mapStateToProps=(state)=>{

  const isEmpty=state.firebase.auth.isEmpty
  return (
   {
      isLoggedIn: !(isEmpty)
   } 
  )
}


const mapDispatchToProps =(dispatch)=> ({ 
  signOut: ()=>{dispatch(signOut())}
})
export default   connect(mapStateToProps,mapDispatchToProps) (Header)