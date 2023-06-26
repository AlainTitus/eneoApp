import React from 'react';
import { Grid, Paper, Stack, Typography, Box} from '@mui/material';

const CarteTotal = ({ titre, montant, couleur1, couleur2, icone, icone2, unite }) => {
    return (
        <>
            <Grid item md={12} lg={3}>
                <Box style={{ padding: "0px", margin: '10px 0 20px 0', width: '290px', backgroundColor:'white' }}>
                    <Stack style={{width: '280px', height: '150px', marginTop: '50px', padding: '5px', alignItems: 'end', position: 'relative' }} spacing={1}>
                        <Typography variant='body2' style={{color: '#5D6D7E' }}>{titre}</Typography>
                        <Typography variant='h5'>{montant} <small style={{fontSize: '12px'}}>{unite}</small> </Typography>
                        <Box style={{ alignSelf: 'stretch', paddingTop: '10px',marginTop: '30px', borderTop: '2px solid #eed', display:'flex' }}>
                        {icone2} <Typography variant='body2' style={{ textAlign: 'left', color: '#5D6D7E' }}>Icone et informaton</Typography>
                        </Box>
                        <Box style={{
                            position: 'absolute',
                            width: "100px",
                            height: '100px',
                            backgroundColor: couleur1,
                            top: '-38px',
                            left: '10px',
                            boxShadow: `${"3px 3px 3px" + couleur2}`,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                            elevation={3}
                        >
                            <p>{icone}</p>
                        </Box>
                    </Stack>
                </Box>
            </Grid>
        </>
    )
}

export default CarteTotal
