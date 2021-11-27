
import  React, { useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ContactlessIcon from '@material-ui/icons/Contactless';
import HomeIcon from '@material-ui/icons/Home';
import VideocamIcon from '@material-ui/icons/Videocam';
import WebIcon from '@material-ui/icons/Web';
import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles({
    list: {
      width: 300,
      
    },
    fullList: {
      width: '300',
    },
  });


const MainNav = () => {

    const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

    return (
        <div className='MainNav'>
            <div className='leftNavItems'>
                <Link href="/">
                    <a> 
                        <Image
                            src="/techup-tampa-Logo.png"
                            alt="brand logo"
                            width={30}
                            height={35}
                        />
                    </a>
                </Link>
            </div>

            <div className='rightNavItems'>
            {/* <Button onClick={toggleDrawer('left', true)}><MenuIcon/></Button> */}
            </div>

         
            <SwipeableDrawer
                anchor='left'
                open={state['left']}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
            
            <div className='navList'>
                <List style={{width: '270px'}}>

                    <Link href="/">
                        <a>
                            <ListItem button onClick={toggleDrawer('left', false)}>
                                    <ListItemIcon><HomeIcon/> </ListItemIcon>
                                    <ListItemText  primary='Home' style={{color: 'black'}}/>
                            </ListItem>
                        </a>
                    </Link>

                    <Link href="/services/ux-ui">
                        <a>
                            <ListItem button onClick={toggleDrawer('left', false)}>
                                    <ListItemIcon><WebIcon/> </ListItemIcon>
                                    <ListItemText  primary='Mobile & Web Apps' style={{color: 'black'}}/>
                            </ListItem>
                        </a>
                    </Link>

                    <Link href="/services/videos">
                        <a>
                        <ListItem button onClick={toggleDrawer('left', false)}>
                            <ListItemIcon><VideocamIcon/> </ListItemIcon>
                            <ListItemText  primary='Videos' style={{color: 'black'}}/>
                        </ListItem>
                        </a>
                    </Link>

                    <Link href="/about">
                        <a> 
                            <ListItem button onClick={toggleDrawer('left', false)}>
                                    <ListItemIcon><AccountCircleIcon/> </ListItemIcon>
                                    <ListItemText  primary='About' style={{color: 'black'}}/>
                            </ListItem>
                        </a>
                    </Link>

                    <Link href="/contact">
                        <a>
                            <ListItem button onClick={toggleDrawer('left', false)}>
                                    <ListItemIcon><ContactlessIcon/> </ListItemIcon>
                                    <ListItemText  primary='Contact' style={{color: 'black'}}/>
                            </ListItem>
                        </a>
                    </Link>

                </List>
            </div>
            </SwipeableDrawer>
   
        </div>
    )
}




export default MainNav;
