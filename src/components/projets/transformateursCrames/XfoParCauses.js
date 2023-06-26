import React from 'react'
import { Box, Paper } from '@mui/material';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar, Pie } from 'react-chartjs-2';

Chart.register(CategoryScale);

const XfoParCauses = ({NbrParType}) => {

    const labels = ["Mono", "Tri"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Nbr Xfo crame par type",
                backgroundColor: ["rgb(255, 99, 132)","rgb(255, 99, 000)"],
                borderColor: ["rgb(255, 99, 132)","rgb(255, 99, 000)"],
                data: NbrParType
            },
        ],
    };
    return (
        <Box style={{ width: '600px', height: '320px', marginBottom: '10px', display:'flex', justifyContent:'center' }}>
            <Paper style={{ width: '600px', height: '320px', marginBottom: '10px' }} elevation={10}>
                <Bar
                    data={data}
                    options={{
                        plugins: {
                            display: true,
                            text: "Users Gained between 2016-2020"
                        }
                    }}
                />
            </Paper>
        </Box>
    )
}

export default XfoParCauses;
