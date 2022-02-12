//libraries 
import * as React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Button, Grid } from '@mui/material';
import { CssBaseline } from '@mui/material';

// component
import Nav from './Components/Nav/'
import Home from './Pages/Home/';
import Footer from './Components/Footer/';

// Theme 
import {nav, lightTheme, darkTheme} from './Theme/'

// import { fetchData } from './Api/'; 


const App = () => {
  const [light, setLight] = React.useState(true);


 

  return ( 
        <ThemeProvider theme={light ? lightTheme : darkTheme}>
          <Nav  theme={nav} />
          <CssBaseline />
          <Grid
            container
            direction="column"
            textAlign="center"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '190vh' }}
          >
            <Button variant="contained" onClick={() => setLight(prev => !prev)}>{light ? '🌙' : '🎇'}</Button>
            
              <Home />

          </Grid>
          
          <Footer />
        
        </ThemeProvider>

   );
}
 
export default App;




