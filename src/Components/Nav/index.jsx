import * as React from 'react';

import {  } from '@mui/material/Box';
import MenuIcon from '@mui/material/Menu';

import { Box, AppBar, Container , Toolbar, IconButton , Typography, Button } from '@mui/material';



const Nav = () => {
    return ( 
        <Box sx={{ flexGrow: 1 }} sx={{ bgcolor: 'background.paper' }}>
        <AppBar position='static'>
            <Container maxWidth="xl">
                <Toolbar>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        INews
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </Container>
        </AppBar>
        </Box>
     );
}
 
export default Nav;