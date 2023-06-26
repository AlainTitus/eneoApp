import React from 'react';
import { Paper } from '@mui/material';

const AnalyseDerivation = ({derivations}) => {
  return (
    <Paper>
      {derivations === null ? <h5>Aucune données chargées</h5> : <h5>Dashboard</h5> }
    </Paper>
  )
}

export default AnalyseDerivation
