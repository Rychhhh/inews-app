import Card from "../Card";

import { Stack, Skeleton , Grid, Typography } from '@mui/material';

import { fetchLastArticle } from '../../Api/'
import { useEffect, useState } from "react";

const LastArticle = () => {
    const [state, setState] = useState({ headlines: [], loading: true });

    useEffect(() => {
        const fetchApi = async () => {
            const articles = await fetchLastArticle();
            const newArticle = articles.slice(0, 6);

            setState({
                headlines: newArticle,
                loading: false,
            });
        }
        fetchApi();

    })

   

    return ( 
        <>
        
        {state.loading ? (
            <Stack spacing={1} sx={{ mt: 2 }}>
                <Skeleton variant="text" />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={500} height={118} />
            </Stack>
            )
            : (
               <Typography>
                   <h1>Last Article</h1>
                <Grid
                    container
                    direction="wrap"
                    textAlign="center"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '120vh', width: '80%' }}
                    sx={{  mx: 'auto' }}
                >
                    {state.headlines.map((article) => {
                        return <Card articles={article} /> 
                    })}
                    </Grid>
                </Typography>
            )}
        </>
     );
}
 
export default LastArticle;