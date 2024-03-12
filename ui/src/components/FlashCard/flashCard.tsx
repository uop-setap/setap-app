import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const FlashCard = ({ topic, question, answer }: { topic: string, question: string, answer: string }) => {

    const [answerVisible, setAnswerVisible] = useState(false);

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {topic}
                    </Typography>
                    <Typography>
                        {question}
                    </Typography>
                    <Typography>
                        {answer}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">View Answer</Button>
                </CardActions>
            </Card>
        </Grid>
    )
};

export default FlashCard;