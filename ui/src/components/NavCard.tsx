import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NavCard = () => {
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
                    Heading
                </Typography>
                <Typography>
                    This can be used for whatever. We can probably just keep this simple
                    and put some navigation items in here.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
            </CardActions>
        </Card>
    </Grid>
    )
};

export default NavCard;