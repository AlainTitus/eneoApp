import React from 'react'
import { Paper, Grid } from '@mui/material';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line, Bar } from 'react-chartjs-2';

Chart.register(CategoryScale);

const DoneByType = ({ derivations }) => {
    const mono = derivations.filter(derivations => derivations.type === 'MONO').length;
    const tri = derivations.filter(derivations => derivations.type === 'TRI').length;
    const labels = ['Mono', "Tri"];
    const realisations = [mono, tri];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Nbr protégée par type",
                backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(52, 152, 219, 0.5)"],
                borderColor: ["rgb(255, 99, 132)", "rgb(52, 152, 219)"],
                data: realisations
            },
        ],
    };
    return (
        <Paper style={{width:'500px', marginBottom: '10px' }} elevation={10}>
            <Bar
                data={data}
                options={{
                    plugins: {
                        display: true,
                        text: "Réalisations par Type 2023"
                    }
                }}
            />
        </Paper>
    )
}

export default DoneByType
