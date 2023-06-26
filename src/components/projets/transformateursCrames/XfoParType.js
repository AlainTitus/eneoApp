import React from 'react'
import { Box, Paper } from '@mui/material';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar, Pie } from 'react-chartjs-2';

Chart.register(CategoryScale);

const XfoParType = ({NbrParType}) => {

    const labels = ["Mono", "Tri"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Nbr Xfo crame par type",
                backgroundColor: "rgba(255, 99, 132, 0.6)",
                borderColor: "rgb(255, 99, 132)",
                data: NbrParType
            },
        ],
    };
    return (
        <Box style={{ width: '100%', height: '320px', display:'flex', justifyContent:'center' }}>
            <Paper style={{width:'100%', padding:'16px'}} elevation={10}>
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

export default XfoParType
