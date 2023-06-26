import React from 'react';
import {Grid, Paper, Typography, Divider, Button} from '@mui/material';

const ProjetItem = ({titre, btn_titre, xs_responsive, action_btn}) => {
    return (
        <Grid item xs={xs_responsive} >
            <Paper style={{ width: "100%", height: '200px', padding: '16px' }} elevation={6}>
                <div style={{ height: "70%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography component='h5' variant='h5'>
                        {titre}
                    </Typography>
                </div>
                <Divider />
                <Button variant='outlined' onClick={action_btn} style={{ margin: '10px 0' }}> {btn_titre} </Button>
            </Paper>
        </Grid>
    )
}

export default ProjetItem
