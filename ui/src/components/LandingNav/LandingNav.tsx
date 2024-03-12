import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import NavCard from '../navCard/NavCard';

const LandingNav = () => {
    return (
        <section>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    <NavCard 
                        title="View all flashcards" 
                        desc='View all the flashcards available to you in the system'
                        routePath='all-flashcards' />
                    <NavCard 
                        title="View personal flashcards"
                        desc='View all flashcards that you have created' 
                        routePath='personal-flashcards' />
                    <NavCard 
                        title="Create new flashcards"
                        desc='Start creating new flashcards for your collection'
                        routePath='create-flashcards' />
                </Grid>
            </Container>
        </section>
    )
};

export default LandingNav;