import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";


const NavCard = ({ title, desc, routePath }: { title: string, desc: string, routePath: string }) => {
    return (
    <Grid item xs={12} sm={6} md={4}>
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <CardMedia
                component="div"
                sx={{
                    // 16:9
                    pt: '56.25%',
                }}
                image="https://source.unsplash.com/random?wallpapers"
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    { title }
                </Typography>
                <Typography>
                    { desc }
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={routePath}>View</Link>
            </CardActions>
        </Card>
    </Grid>
    )
};

export default NavCard;