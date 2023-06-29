import React from 'react';
import { Grid } from '@mui/material';
import DoneByNetwork from './Chart/DoneByNetwork';
import DoneByType from './Chart/DoneByType';
import DoneByExploitation from './Chart/DoneByExploitation';

const GroupeChart = ({derivations}) => {

    const doneByNetwork = <DoneByNetwork derivations={derivations} />
    const doneByType = <DoneByType derivations={derivations} />
    const doneByExploitation = <DoneByExploitation derivations={derivations} />
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                {doneByNetwork}
            </Grid>
            <Grid item xs={12}>
                {doneByType}
            </Grid>
            <Grid item xs={12}>
                {doneByExploitation}
            </Grid>
        </Grid>
    )
}

export default GroupeChart
