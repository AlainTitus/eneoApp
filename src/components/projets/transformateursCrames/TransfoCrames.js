import React, { useState, createContext, useEffect } from 'react';
import { Typography, Paper, Button, ButtonGroup, Stack, TextField, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import UpdateIcon from '@mui/icons-material/Update';
import FormXfoCrame from './FormXfoCrame';
import ModifXfoCrames from './ModifXfoCrames';
import transfo_crames from '../../../datas/transfo_crames.json'
import AnalyseXfoCrames from './AnalyseXfoCrames';

export const UseContext = createContext();

function TransfoCrames({ token }) {
    const [listTransfos, setListTransfos] = useState(transfo_crames)
    const [load, setLoad] = useState(false);
    const [update, setUpdate] = useState(false);
    const [analyse, setAnalyse] = useState(true)
    const [isDrawer, setIsDrawer] = useState(false)
    const [listXfoCrames, setListXfoCrames] = useState([])

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
        fetch("http://localhost:5500/listxfos",
            {
                method: 'GET',
                headers:{
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        )
            .then(res => res.json())
            .then(datas => {
                setListXfoCrames([...datas])
                console.log([...datas]);
            })
    }
    useEffect(() => {
        fetch("http://localhost:5500/listxfos",
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        ).then(res => res.json())
            .then(datas => {
                setListXfoCrames([...datas])
                console.log([...datas]);
            })
    }, [])

    return (
        <div style={{ width: '80%', height: '100%'}}>
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
                            Capex DD-23/007 : Transformateurs Cramés DRE
                        </Typography>
                    </div>
                </Paper>

                <Paper style={{ padding: '5px' }}>
                    <Stack direction='row' spacing={1} >
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


                <UseContext.Provider value={listTransfos} >
                    <Stack>
                        {load && <FormXfoCrame setListXfoCrames={setListXfoCrames} token={token}/>}
                        {update && <ModifXfoCrames token={token} listXfoCrames={listXfoCrames} setListXfoCrames={setListXfoCrames} />}
                        {analyse && <AnalyseXfoCrames listXfoCrames={listXfoCrames} />}
                    </Stack>
                </UseContext.Provider>
            </Paper>


        </div>
    )
}

export default TransfoCrames