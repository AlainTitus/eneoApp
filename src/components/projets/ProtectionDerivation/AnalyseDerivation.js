import React, { useState, useEffect } from 'react';
import { Paper, Grid } from '@mui/material';
import DoneByNetwork from './Chart/DoneByNetwork';
import DoneByType from './Chart/DoneByType';
import DoneByExploitation from './Chart/DoneByExploitation';
import StatExploitation from './Table/StatExploitation';
import GroupeChart from './GroupeChart';
import LeafletDerivation from './CarteGIS/LeafletDerivation';

const AnalyseDerivation = ({ token }) => {

  const [derivations, setDerivations] = useState("")
  const tableStatExploitation = <StatExploitation derivations={derivations} />

  useEffect(() => {
    fetch('http://localhost:5500/derivations',
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    ).then(res => res.json())
      .then(data => {
        setDerivations(data);
      }).catch(err => console.log(err))
  }, [])

  return (
    <div style={{margin:'10px 0'}}>
      {derivations === null || derivations.length === 0 ? <h5>Aucune données chargées</h5> :
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <GroupeChart derivations={derivations} />
            </Grid>
            <Grid item xs={12} md={7}>
              <LeafletDerivation derivations={derivations}/>
            </Grid>
          </Grid>
          {tableStatExploitation}
        </>
      }
    </div>
  )
}

export default AnalyseDerivation
