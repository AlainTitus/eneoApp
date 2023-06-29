import React, { useState, useEffect } from 'react';
import {
    ButtonGroup, Button, Typography, Divider, Paper, Drawer, Box, List, ListItem, ListItemButton, ListItemIcon,
    ListItemText, IconButton, Stack
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import UpdateIcon from '@mui/icons-material/Update';
import AnalyseDerivation from './AnalyseDerivation';
import FormUpdateProtectDerivation from './FormUpdateProtectDerivation';
import TableProtectDerivation from './TableProtectDerivation';
import FormProtectDerivation from './FormProtectDerivation';

const ProtectionDerivation = ({ token }) => {

    const [load, setLoad] = useState(false);
    const [update, setUpdate] = useState(false);
    const [analyse, setAnalyse] = useState(true)
    const [isDrawer, setIsDrawer] = useState(false)
    const [derivations, setDerivations] = useState(null);


    const handleLoad = () => {
        setUpdate(false);
        setAnalyse(false);
        setLoad(true);
        setIsDrawer(false)
    }

    const handleUpdate = () => {
        setUpdate(true);
        setAnalyse(false);
        setLoad(false);
        setIsDrawer(false)
    }

    const handleAnalyse = () => {
        setUpdate(false);
        setAnalyse(true);
        setLoad(false);
        setIsDrawer(false);
    }

    useEffect(() => {
        fetch('http://localhost:5500/derivations',
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then(res => res.json())
            .then(data => {
                setDerivations(data);
            }).catch(err => console.log(err))
    }, [])

    return (
        <div style={{ width: '80%', height: '100%' }}>
            <Paper style={{padding: '8px'}}>
                <Paper sx={{ p: 1, marginBottom: 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton color='primary' edge='start' size='large' aria-label='icon menu' onClick={() => setIsDrawer(true)} >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor='left'
                            open={isDrawer}
                            onClose={() => setIsDrawer(false)}
                        >
                            <Box p={2} width='250px' role='presentation'>
                                <nav>
                                    <List>
                                        <ListItem disablePadding onClick={handleAnalyse}>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <AssessmentIcon />
                                                </ListItemIcon>
                                                <ListItemText primary='Réalisations' />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding onClick={handleLoad}>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <SaveAltIcon />
                                                </ListItemIcon>
                                                <ListItemText primary='Enregistrement' />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding onClick={handleUpdate}>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <UpdateIcon />
                                                </ListItemIcon>
                                                <ListItemText primary='Modification' />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </nav>

                            </Box>
                        </Drawer>
                        <Typography variant='h5' sx={{ color: '#1976d2' }}>
                            Capex DD-23/007 : Protection Dérivation DRE
                        </Typography>
                    </div>
                </Paper>
                <Paper style={{ padding: '5px' }}>
                    <Stack direction='row' spacing={1} sx={{ marginBottom: 1 }} >
                        <ButtonGroup variant='contained' aria-label='onglet-transfo-crame' disableElevation>
                            <Button onClick={handleAnalyse}>
                                <AssessmentIcon />
                                Realisations
                            </Button>
                            <Button onClick={handleLoad}>
                                <SaveAltIcon />
                                Enregistrement
                            </Button>
                            <Button onClick={handleUpdate}>
                                <UpdateIcon />
                                Modification
                            </Button>
                        </ButtonGroup>
                    </Stack>
                </Paper>
                <Stack>
                    {load && <FormProtectDerivation token={token} />}
                    {update && <TableProtectDerivation derivations={derivations} token={token} />}
                    {analyse && <AnalyseDerivation derivations={derivations} token={token} />}
                </Stack>
            </Paper>

        </div>
    )
}

export default ProtectionDerivation
