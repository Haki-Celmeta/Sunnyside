import './_navbar.scss';
import React from 'react';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateScreenWidth);

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  const DrawerList = (
    <Box sx={{ width: 250}} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Home', 'Services', 'Project', 'Contact'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} sx={{paddingLeft: '1rem'}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className='navbar-container'>
      <div className='title'>sunnyside</div>
      <nav>
        <ul>
          <li><Button>Home</Button></li>
          <li><Button>Services</Button></li>
          <li><Button>Project</Button></li>
          <li><Button>Contact</Button></li>
        </ul>
      </nav>
      <div style={{display: screenWidth <= 600 ? 'block' : 'none'}}>
        <Button sx={{color: '#fff', display: screenWidth <= 600 ? 'flex' : 'none'}} onClick={toggleDrawer(true)}>
          <MenuOutlinedIcon fontSize='large'/>
        </Button>
        <Drawer sx={{'.css-4t3x6l-MuiPaper-root-MuiDrawer-paper': {backgroundColor: 'hsl(200, 100%, 62%)', color: 'white'}}} open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;