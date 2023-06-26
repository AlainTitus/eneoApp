import React, { useContext, useEffect, useState } from 'react';
import { Paper, Typography, Box, Stack, Divider, Grid } from '@mui/material';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PaidIcon from '@mui/icons-material/Paid';
import LeafletTest from './LeafletTest';
import { UseContext } from './TransfoCrames';
import CarteTotal from './CarteTotal';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartXfoCrames from './ChartXfoCrames';
import ListXfoCrames from './ListXfoCrames';




const AnalyseXfoCrames = ({ listXfoCrames }) => {

    const [listXfos, setListXfos] = useState([]);
    const calcSum = (tab) => {
        if (tab.length == 0) {
            return { service: 0, materiel: 0, total: 0, nbrXfo: 0 };
        } else {
            const sumService = tab.reduce((acc, cur) => acc + (cur?.Cout_Service ? cur.Cout_Service : 0), 0);
            const sumMateriel = tab.reduce((acc, cur) => acc + (cur?.Cout_Materiel ? cur.Cout_Materiel : 0), 0);
            const sumTotal = sumService + sumMateriel;
            const nbrXfo = tab.length;
            return { service: sumService, materiel: sumMateriel, total: sumTotal, nbrXfo }
        }
    }

    const sum = calcSum(listXfos)
    console.log(sum);

    const REGEX_GROUPS = /(\d)(?=(\d\d\d)+(?!\d))/g
    // Le délimiteur FR est le _Narrow No-Break Space_, eh oui !
    function usGrouping(int, delimiter = '\u202f') {
        return int.toString().replace(REGEX_GROUPS, `$1${delimiter}`)
    }

    useEffect(() => {
        setListXfos(listXfoCrames)
    })

    return (
        <>
            {
                listXfoCrames.length == 0 ? <p>Aucun transformateur cramé enregistré pour le moment</p> :
                (listXfos.length == 0 ? <p>Chargement en cours ...</p> :
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Grid container spacing={2} width='95%'>
                                <CarteTotal
                                    titre="Total service"
                                    montant={usGrouping(sum.service)}
                                    couleur1="#dbc607"
                                    couleur2="#7D6608"
                                    unite='CFA'
                                    icone={<BuildCircleIcon style={{ fontSize: 50, color: 'white' }} />}
                                    icone2={<BuildCircleIcon style={{ fontSize: 20, marginRight: '5px' }} />}
                                />
                                <CarteTotal
                                    titre="Total materiel"
                                    montant={usGrouping(sum.materiel)}
                                    couleur1="#2FAF29"
                                    couleur2="#2B8F1D"
                                    unite='CFA'
                                    icone={<EngineeringIcon style={{ fontSize: 50, color: 'white' }} />}
                                    icone2={<BuildCircleIcon style={{ fontSize: 20, marginRight: '5px' }} />}
                                />
                                <CarteTotal
                                    titre="Total projet"
                                    montant={usGrouping(sum.total)}
                                    couleur1="#1976d2"
                                    couleur2="#105BDE"
                                    unite='CFA'
                                    icone={<PaidIcon style={{ fontSize: 50, color: 'white' }} />}
                                    icone2={<BuildCircleIcon style={{ fontSize: 20, marginRight: '5px' }} />}
                                />
                                <CarteTotal
                                    titre="Nbr transfo crame"
                                    montant={sum.nbrXfo}
                                    couleur1="#943126"
                                    couleur2="#7B241C"
                                    unite={sum.nbrXfo > 1 ? "postes" : "poste"}
                                    icone={<PaidIcon style={{ fontSize: 50, color: 'white' }} />}
                                    icone2={<BuildCircleIcon style={{ fontSize: 20, marginRight: '5px' }} />}
                                />
                            </Grid>
                        </div>
                        <ChartXfoCrames listTransfos={listXfoCrames} />
                        {listXfoCrames.length == 0 ? <h3>Aucune donnée enregistrée pour le moment</h3> : <ListXfoCrames listXfoCrames={listXfoCrames} />}
                        <Paper sx={{ p: 2, margin: '10px 0' }}>
                            <Box style={{display:'flex', justifyContent:'center'}} >
                                <LeafletTest listTransfos={listXfoCrames} />
                            </Box>
                        </Paper>
                    </div>)
            }
        </>


    )
}

export default AnalyseXfoCrames
