import React from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const Hero = () => {
    return (
    <main>
        <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Album layout
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    We'll write something catchy here, I can't really think of anything right now
                    so bare with me. Someone feel free to replace this if you have anything better.
                </Typography>
                <div className={classes.heroButtons}>
                    <Grid container spacing={16} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary">
                                Main call to action
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Secondary action
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    </main>
    )
};

export default Hero;