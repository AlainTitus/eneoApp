import React, { useEffect, useState } from 'react';
import { Box, Paper } from '@mui/material';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from 'react-chartjs-2';

Chart.register(CategoryScale);

const XfoParMois = ({ lists }) => {

    const [listsXfo, setListXfo] = useState({ lists })

    /****Determiner et classer les mois *******/
    let moisAnnee = ["Jan", "Fev", "Mar", "Avr", "Mai", "Jun", "Jui", "Aout", "Sept", "Oct", "Nov", "Dec"]
    let mois = [];
    for (let i = 0, c = lists.length; i < c; i++) {
        let date = new Date(lists[i].Date_Info_Avarie)
        mois.push(date.getMonth())
    }

    mois.sort(function(a, b){
        return a-b;
    })

    var tab1 = [...mois];
    var tab2 = [...mois];
    var moisUniq = [];
    var nbrMois = [];
    tab1.forEach(elem => {
        let occ = 0;

        if(tab2.includes(elem)){
            for(let i=0, c=tab1.length; i<c; i++){
                if(tab1[i]==elem){
                    occ = occ + 1;
                }
            }
            moisUniq.push(moisAnnee[elem]);
            nbrMois.push(occ);
            tab2 = tab2.filter(el => el != elem )
        }
    })

    /**********************************************/
    



    const labels = moisUniq;
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Nbr Xfo crames",
                backgroundColor: "rgba(255, 99, 132, 0.6)",
                fill: true,
                borderColor: "rgb(255, 99, 132)",
                data: nbrMois
            },
        ],
    };
    return (
        <Box style={{ width: '100%', height:'320px', display:'flex', justifyContent:'center' }}>
            <Paper style={{width:'100%', padding:'16px'}}  elevation={10}>
                <Line
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

export default XfoParMois
