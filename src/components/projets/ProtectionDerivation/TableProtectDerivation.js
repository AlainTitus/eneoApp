import React, { useEffect, useState } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, Paper } from '@mui/material';
import FormUpdateProtectDerivation from './FormUpdateProtectDerivation';
import { useNavigate } from 'react-router-dom';



const TableProtectDerivation = ({token}) => {

    const [tableVisible, setTableVisible] = useState(true);
    const [formVisible, setFormVisible] = useState(false);
    const [detailVisible, setDetailVisible] = useState(false);
    const [derivationToUpdate, setDerivationToUpdate] = useState(null);
    const [derivations, setDerivations] = useState(null);

    const navigate = useNavigate();

    const handleView = (id) => {
        const deriv = derivations.find(derivation => derivation._id == id)
        
        if(deriv){
            deriv.dateprotection = new Date(deriv.dateprotection)
            console.log(deriv)
            setFormVisible(true);
            setTableVisible(false)
            setDerivationToUpdate({...deriv});
        }
    }

    const handleDelete = (id)=>{
        const derivationToDelete = derivations.find(derivation => derivation._id === id);

        fetch('http://localhost:5500/supprimederivation',
        {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(derivationToDelete)
        }
        ).then(res =>{
            return res.json();
        }).then(data =>{
            console.log(data.result);
            fetch('http://localhost:5500/derivations',
        {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        ).then(res=> res.json())
        .then(data => {
            setDerivations(data);
    }).catch(err => console.log(err))
        }).catch(err => console.log(err))
    }

    useEffect(()=>{
        fetch('http://localhost:5500/derivations',
        {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        ).then(res=> res.json())
        .then(data => {
            setDerivations(data);
    }).catch(err => console.log(err))
    }, [])

    return (
        <Paper>
            {tableVisible && ((derivations !== null && derivations.length !==0) ?
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nom</TableCell>
                                <TableCell>Depart</TableCell>
                                <TableCell>Exploitation</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Etat</TableCell>
                                <TableCell>Voir</TableCell>
                                <TableCell align='center'>MAJ</TableCell>
                                <TableCell align='center'>Supprimer</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                derivations.map(derivation => {
                                    const alert = derivation.etat == 'Protégé' ? "" : "red";
                                    return (
                                        <TableRow key={derivation._id}>
                                            <TableCell style={{ color: alert }}>{derivation.nomderiv}</TableCell>
                                            <TableCell style={{ color: alert }}>{derivation.depart}</TableCell>
                                            <TableCell style={{ color: alert }}>{derivation.exploitation}</TableCell>
                                            <TableCell style={{ color: alert }}>{derivation.type}</TableCell>
                                            <TableCell style={{ color: alert }}>{derivation.etat}</TableCell>
                                            <TableCell align='center'> <Button variant='outlined' color='secondary' >Voir</Button> </TableCell>
                                            <TableCell align='center'><Button variant='outlined' color='primary' onClick={() => handleView(derivation._id)}>Modifier</Button></TableCell>
                                            <TableCell align='center'><Button variant='outlined' color='error' onClick={()=>handleDelete(derivation._id)}>Supprimer</Button></TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                :
                <h2>Aucune dérivation enregistrée pour le moment</h2>)
            }
            {formVisible && <FormUpdateProtectDerivation token={token} derivationToUpdate={derivationToUpdate} setTableVisible={setTableVisible} setFormVisible={setFormVisible}  />}
            {detailVisible && <Button>Retour</Button>}

        </Paper>


    )
}

export default TableProtectDerivation
