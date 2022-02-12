import images from '../../images/logo_web.jpg';
import siteConfig from '../../site-config';
import Button from '@mui/material/Button'


const Hero = () => {
    return ( 
        <>
        <img src={images} style={{ width: '200px', height: '200px' }} alt="logo web" />
        <h1>Inews Platform Website</h1>
        <h3 className='font-bold text-5xl'>{siteConfig.subHeading}</h3>
        <Button variant="contained" bgcolor="primary">
            Get Started
        </Button>
        </>
     );
}
 
export default Hero;