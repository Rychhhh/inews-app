import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
    function Copyright() {
        return (
          <Typography variant="body2" color="white" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
              INews
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }

    return(
        <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
            <Typography variant="h4" align="center" gutterBottom>
               INews
            </Typography>
            <Typography
            variant="subtitle1"
            align="center"
            color="white"
            component="p"
            my={4}
            >
              This platform provides the latest international news.
            </Typography>
            <Copyright />
        </Container>
        </Box>
    )
}
 
export default Footer;