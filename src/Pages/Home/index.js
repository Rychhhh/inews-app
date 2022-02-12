import * as React from 'react'

import Hero from '../../Components/Hero/'
import LastArticle from '../../Components/LastArticle/';
import InternNews from '../../Components/InternNews/';

const Home = () => {
    return(
        <>
            <Hero />
            <LastArticle/>
            <InternNews />
        </>
    )
}
 
export default Home;