import { useEffect, useState } from 'react';
import { Stack, Skeleton , Grid, Typography } from '@mui/material';

// pages
import Card  from '../Card/';



// api
import { fetchInternArticle } from '../../Api';

const InternNews = () => {   
   const [state, setState] = useState({ internasional: [], loading: true});

   useEffect(() => {
      const fetchApi = async () => {
         const articles = await fetchInternArticle();
         const sliceArticles = articles.data.data.slice(0 , 6);
         
         setState({
            internasional: sliceArticles,
            loading: false
         })
      }

      fetchApi();
   });


    return ( 
         <> 
         {
            state.loading ? (
               <Stack spacing={1} sx={{ mt: 2 }}>
                  <Skeleton variant="text" />
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton variant="rectangular" width={500} height={118} />
               </Stack>
            ) : (
               <Typography>
                  <h1>Internasional News</h1>
                  <Grid 
                  container 
                  direction="wrap"
                  textAlign='center'
                  alignItems='center'
                  justifyContent="center"
                  style={{ minHeight: '120vh', width: '80%' }}
                  sx={{ mx: 'auto' }}
                  >
                  {state.internasional.map((intern) => {
                     return <Card articles={intern}/>
                  } )}
                  </Grid>
               </Typography>
            )
         }
         
         </>
     );
}
 
export default InternNews;