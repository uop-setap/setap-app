import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import NavCard from '../NavCard';

const LandingNav = () => {
    return(
        <section>
            <Container sx={{ py: 8 }} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    <NavCard />
                    <NavCard />
                    <NavCard />
                </Grid>
            </Container>
        </section>
    )
};

export default LandingNav;