import { ExpanMoreIcon } from '@mui/icons-material';
import { Paper, Accordion, AccordionSummary, AccordionDetails, Typography, Skeleton } from '@mui/material';
import React, { Component, useState } from 'react'
import { useEffect } from 'react';

const CauseList = ({ lists }) => {

    const [datas, setDatas] = useState([])



    const uniqVal = (tabs) => {
        if (tabs.length == 0) {
            return;
        } else {
            const causeTab = tabs.map(tab => {
                if (tab.Cause_Avarie) {
                    return tab.Cause_Avarie;
                }
            })

            const uniq = causeTab.filter((elm, index) => (
                causeTab.indexOf(elm) == index && elm != undefined
            ))
            return uniq;
        }
    }

    const causePosteObj = function (tab1, tab2) {
        const response = [];

        if (tab1 === undefined) {
            return;
        } else {
            tab1.forEach(element => {
                const postes = tab2.filter(tab => {
                    if (tab.Cause_Avarie == element) return tab.Exploitation
                });
                const nbr = tab2.filter(tab => tab.Cause_Avarie == element);
                response.push({
                    cause: element,
                    postes,
                    nbrPoste: nbr.length
                })
            });
        }



        return response;
    }

    useEffect(() => {
        setDatas(lists)
    })


    const uniqCauses = uniqVal(datas)

    const causesMap = causePosteObj(uniqCauses, datas);

    console.log(causesMap);

    return (
        <Paper sx={{ width: '100%', padding:'16px'}} elevation={10}>
            <Typography variant='body1' style={{ padding: '5px 12px', color: '#7F8C8D' }}>Liste des causes d'avaries :</Typography>
            {datas.length == 0 ?
                <>
                    <Skeleton variant='rectangular' style={{ width: '95%', margin: "0 0 10px 10px" }} height={40} />
                    <Skeleton variant='rectangular' style={{ width: '95%', margin: "0 0 10px 10px" }} height={40} />
                    <Skeleton variant='rectangular' style={{ width: '95%', margin: "0 0 10px 10px" }} height={40} />
                    <Skeleton variant='rectangular' style={{ width: '95%', margin: "0 0 10px 10px" }} height={40} />
                    <Skeleton variant='rectangular' style={{ width: '95%', margin: "0 0 10px 10px" }} height={40} />
                </>
                :
                <>
                    {
                        causesMap.map((cause)=>{
                            return (
                                <Accordion key={cause}>
                                    <AccordionSummary style={{margin:'0', padding:'0 0 0 10px'}} component='div'>
                                        <Typography>{`${cause.cause}`} - (<span style={{color:'red', fontStyle:'italic', fontWeight:'bold'}}>{`${cause.nbrPoste}`}</span>)</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails style={{backgroundColor:'#f0f0f0', padding:'0'}}>
                                        {
                                            cause.postes.map(poste =>{
                                                return(
                                                    <Typography key={poste._id} style={{paddingLeft:'30px'}}>{poste.Nom_Poste}</Typography>
                                                )
                                            })
                                        }
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })
                    }
                </>

            }
        </Paper>

    )
}

export default CauseList;
