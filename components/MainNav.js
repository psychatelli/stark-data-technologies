
import  React, { useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { makeStyles } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactlessIcon from '@mui/icons-material/Contactless';
import HomeIcon from '@mui/icons-material/Home';
import VideocamIcon from '@mui/icons-material/Videocam';
import WebIcon from '@mui/icons-material/Web';
import MenuIcon from '@mui/icons-material/Menu';



// const useStyles = makeStyles({
//     list: {
//       width: 300,
      
//     },
//     fullList: {
//       width: '300',
//     },
//   });

 
const MainNav = () => {

    // const classes = useStyles();
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
                            src="/stark-icon.png"
                            alt="brand logo"
                            width={45}
                            height={40}
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
