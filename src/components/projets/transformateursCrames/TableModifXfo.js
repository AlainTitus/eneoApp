import React, { useMemo, useContext, useState, useEffect } from 'react';
import { Button, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, CircularProgress, Box } from '@mui/material';
import transfo_crames from '../../../datas/transfo_crames.json';
import { UseContext } from './TransfoCrames';



const TableModifXfo = ({ setDetailElem, formModif, tabModif, detailXfo, transfoDisplay, token }) => {

    const [isLoading, setIsLoading] = useState('true');
    const [listXfoCrames, setListXfoCrames] = useState('')


    const handleUpdate = (id) => {
        const elemXfo = listXfoCrames.filter(data => data._id === id)
        console.log(elemXfo[0]);
        transfoDisplay({ ...elemXfo[0] });
        formModif(true);
        tabModif(false);
        detailXfo(false);
    }
    const handleDetail = (id) => {
        const elemXfo = listXfoCrames.filter(data => data._id === id)
        setDetailElem({ ...elemXfo[0] })
        detailXfo(true);
        formModif(false);
        tabModif(false);
    }

    const handleDeleteOne = (id) => {
        const newListXfo = listXfoCrames.filter(data => data._id != id)
        const transfoToDelete = listXfoCrames.filter(data => data._id == id);
        const transfo = transfoToDelete[0];

        fetch("http://localhost:5500/deletexfo",
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(transfo)
            }
        ).then((res) => {
            console.log("transfo a supprimer transmis au serveur")
            setListXfoCrames(newListXfo);
        }).catch((err) => console.log(err))
    }

    useEffect(() => {
        fetch('http://localhost:5500/listxfos',
            {
                method: 'GET',
                headers: {
                    'Authorization' : `Bearer ${token}`,
                    'Content-Type' : 'application/json',
                },
                credentials: 'include'
            }
        ).then((datas) => datas.json())
        .then((lists) => {
                setListXfoCrames(lists)
                setIsLoading(false)
            })
    }, [])

    return (
        <div>
            {
                isLoading &&
                <Box style={{margin:'0 auto'}}>
                    <CircularProgress />
                </Box>
            }
            {!isLoading &&
                <TableContainer style={{ marginTop: '10px' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'>Départ</TableCell>
                                <TableCell align='center'>Exploitation</TableCell>
                                <TableCell align='center'>Nom poste</TableCell>
                                <TableCell align='center'>Puissance</TableCell>
                                <TableCell align='center'>Voir</TableCell>
                                <TableCell align='center'>Modifier</TableCell>
                                <TableCell align='center'>Supprimer</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listXfoCrames.map(data => {
                                return (
                                    <TableRow key={data._id}>
                                        <TableCell>{data.Depart}</TableCell>
                                        <TableCell>{data.Exploitation}</TableCell>
                                        <TableCell>{data.Nom_Poste}</TableCell>
                                        <TableCell align='center'>{data.Puis_Xfo_Avarie}</TableCell>
                                        <TableCell align='center'> <Button variant='outlined' color='success' size='small' onClick={() => handleDetail(data._id)}>Voir</Button> </TableCell>
                                        <TableCell align='center'> <Button variant='outlined' color='secondary' size='small' onClick={() => handleUpdate(data._id)}>Modifier</Button> </TableCell>
                                        <TableCell align='center'><Button variant='outlined' color='error' size='small' onClick={() => handleDeleteOne(data._id)}>Supprimer</Button></TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </div>
    )
}

export default TableModifXfo
