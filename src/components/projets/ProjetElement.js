import React from 'react';
import { Paper, Grid, Typography, Button, Divider } from '@mui/material';

const ProjetElement = ({xs_responsive, titre, btn_titre, btn_action}) => {
    return (
        <Grid item xs={xs_responsive}>
            <Paper style={{ width: "100%", height: '200px', padding: '16px' }} elevation={6}>
                <div style={{ height: "70%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography component='h5' variant='h5'>
                        {titre}
                    </Typography>
                </div>
                <Divider />
                <Button variant='outlined' onClick={btn_action} style={{ margin: '10px 0' }}> {btn_titre} </Button>
            </Paper>
        </Grid>
    )
}

export default ProjetElement
