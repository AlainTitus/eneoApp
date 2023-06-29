import React from 'react';
import { Paper, Grid } from '@mui/material';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line, Bar } from 'react-chartjs-2';

Chart.register(CategoryScale);

const DoneByNetwork = ({ derivations }) => {

    const D11Bertoua = derivations.filter(derivation => derivation.depart === 'D11 BERTOUA').length;
    const D12Bertoua = derivations.filter(derivation => derivation.depart === 'D12 BERTOUA').length;
    const D31Batouri = derivations.filter(derivation => derivation.depart === 'D31 BATOURI').length;
    const D31AbongMbang = derivations.filter(derivation => derivation.depart === 'D31 ABONG MBANG').length;
    const A32Bertoua = derivations.filter(derivation => derivation.depart === 'A32 BERTOUA').length;
    const D32Belabo = derivations.filter(derivation => derivation.depart === 'D32 BELABO').length;
    const D31Lomie = derivations.filter(derivation => derivation.depart === 'D31 LOMIE').length;
    const D31Moloundou = derivations.filter(derivation => derivation.depart === 'D31 MOLOUNDOU').length;
    const D11Yokadouma = derivations.filter(derivation => derivation.depart === 'D11 YOKADOUMA').length;
    const D31Betare = derivations.filter(derivation => derivation.depart === 'D31 BETARE OYA').length;
    const D31GarouaBoulai = derivations.filter(derivation => derivation.depart === 'D31 GAROUA BOULAI').length;

    const labels = ["D11Bertoua", "D12Bertoua", "D31Batouri", "D31AbongMbang", "A32Bertoua", "D32Belabo", "D31Lomie", "D31Moloundou", "D11Yokadouma", "D31Betare", "D31GarouaBoulai"];
    const realisations = [D11Bertoua, D12Bertoua, D31Batouri, D31AbongMbang, A32Bertoua, D32Belabo, D31Lomie, D31Moloundou, D11Yokadouma, D31Betare, D31GarouaBoulai];
    const derivationsExistantes = [5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5];

    const data = {
        labels: labels,
        datasets: [
            {
                fill: true,
                label: "Protégé par départ",
                backgroundColor: ["rgba(255, 99, 132, 0.5)"],
                borderColor: ["rgb(255, 99, 132)"],
                data: realisations
            },
            {
                fill: true,
                label: "Total deriv par depart",
                backgroundColor: ["rgba(52, 152, 219, 0.5)"],
                borderColor: ["rgb(52, 152, 219)"],
                data: derivationsExistantes
            },
        ],
    };
    return (
        <Paper style={{width:'500px', marginBottom: '10px' }} elevation={10}>
            <Line
                data={data}
                options={{
                    plugins: {
                        display: true,
                        text: "Réalisations par départ 2023"
                    }
                }}
            />
        </Paper>
    )
}

export default DoneByNetwork;
