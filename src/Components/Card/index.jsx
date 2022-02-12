import { Card, CardActionArea, CardMedia, CardContent, Typography, Link } from '@mui/material';
import moment from 'moment';

const ArticleGrid = ( { articles } ) => {
    // console.log(articles)
    return ( 
          <Card sx={{ maxWidth: 300, mt: '9px;', mr: '9px' }} >
            <CardActionArea>
              <CardMedia
                component="img"
q                image={articles.image.small}
                alt="latest article"
              />
              <CardContent>
              <Link href={articles.link} underline="hover">
                <Typography gutterBottom variant="h6" component="div">
                  {articles.title}
                </Typography>
              </Link>
                <Typography gutterBottom variant="subHeading" component="div">
                  {moment(articles.isoDate).local().format('YYYY-MM-DD HH:mm')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {articles.contentSnippet}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        
     );
}
 
export default ArticleGrid;