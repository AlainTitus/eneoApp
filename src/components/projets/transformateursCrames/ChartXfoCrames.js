import React, { useState } from 'react';
import { Paper, Box, Grid, Divider } from '@mui/material';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line, Bar } from 'react-chartjs-2';
import XfoParMois from './XfoParMois';
import XfoParType from './XfoParType';
import XfoParCauses from './XfoParCauses';
import XfoParExploitation from './XfoParExploitation';
import CauseList from './CauseList';

Chart.register(CategoryScale);


const ChartXfoCrames = ({ listTransfos }) => {

    // const [lists, setLists] = useState([...listTransfos])
    const lists = listTransfos
    /***Debut statistiques sur le type de transformateur ***/
    let mono = 0;
    let tri = 0;
    console.log(lists);
    for (let i = 0, c = lists.length; i < c; i++) {
        switch (lists[i].Type) {
            case "Mono":
                mono = mono + 1;
                break;
            case "Tri":
                tri = tri + 1;
                break;

            default:
                break;
        }

    }

    let NbrParType = [mono, tri];
    /***Fin statistiques sur le type de transformateur ***/

    /***Debut statistique sur les causes exploitations ***/
    const exploitations = ['BERTOUA', 'ABONG MBANG', 'LOMIE', 'BELABO', 'BATOURI', 'YOKADOUMA', 'MOLOUNDOU', 'GAROUA BOULAI', 'BETARE OYA'];
    let listExploitation = [];

    for (let i = 0, c = lists.length; i < c; i++) {
        listExploitation.push(lists[i].Exploitation);
    }
    let exploitationCrame = [], nbrParExploitation = [];

    for (let i = 0, c = exploitations.length; i < c; i++) {
        if (listExploitation.includes(exploitations[i])) {
            let occ = 0;
            for (let j = 0, d = listExploitation.length; j < d; j++) {
                if (listExploitation[j] == exploitations[i]) {
                    occ = occ + 1
                }
            }
            nbrParExploitation.push(occ);
            exploitationCrame.push(exploitations[i])
        }
    }

    let nbrXfoCrame = lists.length;
    let pourcentage = [];
    for (let i = 0, c = nbrParExploitation.length; i < c; i++) {
        pourcentage.push(
            ((nbrParExploitation[i] * 100) / nbrXfoCrame).toFixed(2)
        )
    }
    return (
        <>
            <Grid container spacing={3} style={{width:'90%', margin:'0 auto'}}>
                <Grid item xs={12} md={6}>
                    <XfoParMois lists={lists} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <XfoParType NbrParType={NbrParType} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CauseList lists={listTransfos} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <XfoParExploitation lists={lists} pourcentage={pourcentage} exploitation={exploitationCrame} />
                </Grid>
            </Grid>
            <Divider></Divider>
        </>
    )
}

export default ChartXfoCrames
