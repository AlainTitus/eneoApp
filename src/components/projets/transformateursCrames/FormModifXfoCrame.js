import React, { useEffect, useState } from 'react';
import { format } from 'date-fns'
import { TextField, Stack, MenuItem, Grid, Typography, InputAdornment, Button, Box, CircularProgress } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';


const departs = [
    {
        label: "D11 BERTOUA",
        value: "D11 BERTOUA"
    },
    {
        label: "D12 BERTOUA",
        value: "D12 BERTOUA"
    },
    {
        label: "D31 BATOURI",
        value: "D31 BATOURI"
    },
    {
        label: "D32 MINTA",
        value: "D32 MINTA"
    },
    {
        label: "D31 ABONG-MBANG",
        value: "D31 ABONG-MBANG"
    },
    {
        label: "A32 BERTOUA",
        value: "A32 BERTOUA"
    },
    {
        label: "D31 LOMIE",
        value: "D31 LOMIE"
    },
    {
        label: "D11 YOKADOUMA",
        value: "D11 YOKADOUMA"
    },
    {
        label: "D31 MOLOUNDOU",
        value: "D31 MOLOUNDOU"
    },
    {
        label: "D31 GAROUA BOULAI",
        value: "D31 GAROUA BOULAI"
    },
    {
        label: "D31 BETARE OYA",
        value: "D31 BETARE OYA"
    },
];
const exploitations = [
    {
        label: 'BERTOUA',
        value: 'BERTOUA'
    },
    {
        label: 'ABONG MBANG',
        value: 'ABONG MBANG'
    },
    {
        label: 'LOMIE',
        value: 'LOMIE'
    },
    {
        label: 'BELABO',
        value: 'BELABO'
    },
    {
        label: 'BATOURI',
        value: 'BATOURI'
    },
    {
        label: 'YOKADOUMA',
        value: 'YOKADOUMA'
    },
    {
        label: 'MOLOUNDOU',
        value: 'MOLOUNDOU'
    },
    {
        label: 'GAROUA BOULAI',
        value: 'GAROUA BOULAI'
    },
    {
        label: 'BETARE OYA',
        value: 'BETARE OYA'
    }

];
const puissances = [
    {
        label: "25",
        value: "25",
    },
    {
        label: "50",
        value: "50",
    },
    {
        label: "100",
        value: "100",
    },
    {
        label: "160",
        value: "160",
    },
    {
        label: "250",
        value: "250",
    },
    {
        label: "400",
        value: "400",
    },
    {
        label: "630",
        value: "630",
    },
];
const tensions = [
    {
        label: '15',
        value: '15'
    },
    {
        label: '30',
        value: '30'
    },
    {
        label: '17.32',
        value: '17.32'
    }
];
const typeBornes = [
    {
        value: "BE",
        label: 'BE'
    },
    {
        value: "BP",
        label: "BP"
    }
]
const typePostes = [
    {
        label: 'Mono',
        value: 'Mono'
    },
    {
        label: 'Tri',
        value: 'Tri'
    }
]


const FormModifXfoCrame = ({ formModif, tabModif, detailXfo, transfo, token }) => {


    const [isLoading, setIsLoading] = useState('true')

    const [unikId, setUnikId] = useState(transfo._id)
    const [depart, setDepart] = useState(transfo.Depart);
    const [exploitation, setExploitation] = useState(transfo.Exploitation);
    const [poste, setPoste] = useState(transfo.Nom_Poste);
    const [typePoste, setTypePoste] = useState(transfo.Type);
    const [codeXfo, setCodeXfo] = useState(transfo.Code);
    const [cause, setCause] = useState(transfo.Cause_Avarie);
    const [dateAvarie, setDateAvarie] = useState(transfo.Date_Info_Avarie);
    const [dateRempl, setDateRempl] = useState(transfo.Date_Remplacement);
    const [observ, setObserv] = useState(transfo.Observation_sur_delais);
    const [puisSortie, setPuisSortie] = useState(transfo.Puis_Xfo_Sorti);
    const [tensSortie, setTensSortie] = useState(transfo.Tension_Xfo_Sorti);
    const [typeBorneSorti, setTypeBorneSorti] = useState(transfo.Type_Borne_Sorti);
    const [numEneoSorti, setNumEneoSorti] = useState(transfo.NumEneo_Xfo_Sorti);
    const [numSerieSorti, setNumSerieSorti] = useState(transfo.NumSerie_Xfo_Sorti);
    const [typeBorneAvari, setTypeBorneAvari] = useState(transfo.Type_Borne_Avari)
    const [anneeXfoSorti, setAnneeXfoSorti] = useState(transfo.Annee_Xfo_Sorti);
    const [marqueXfoSorti, setMarqueXfoSorti] = useState(transfo.Marque_Xfo_Sorti);
    const [puisXfoAvari, setPuisXfoAvari] = useState(transfo.Puis_Xfo_Avarie);
    const [tensionXfoAvari, setTensionXfoAvari] = useState(transfo.Tension_Xfo_Avarie);
    const [numEneoAvari, setNumEneoAvari] = useState(transfo.NumEneo_Xfo_Avarie);
    const [numSerieAvari, setNumSerieAvari] = useState(transfo.NumSerie_Xfo_Avarie);
    const [anneeAvari, setAnneeAvari] = useState(transfo.Annee_Xfo_Avarie);
    const [marqueAvari, setMarqueAvari] = useState(transfo.Marque_Xfo_Avarie);
    const [dateDivs, setDateDivs] = useState(transfo.Date_Info_Divs);
    const [coutService, setCoutService] = useState(transfo.Cout_Service);
    const [coutMateriel, setCoutMateriel] = useState(transfo.Cout_Materiel);
    const [commande, setCommande] = useState(transfo.Commande);
    const [reception, setReception] = useState(transfo.Reception);
    const [coordX, setCoordX] = useState(transfo.Coord_X);
    const [coordY, setCoordY] = useState(transfo.Coord_Y);

    const [ficheAvari, setFicheAvari] = useState("");
    const [ordreService, setOrdreService] = useState("");
    const [matRequisition, setMatRequision] = useState("");
    const [bonSorti, setBonSorti] = useState("");
    const [fichMouvt, setFicheMouvt] = useState("");
    const [fichRestitution, setFichRestitution] = useState("");
    const [pvManuel, setPVManuel] = useState("");
    const [commandeSyst, setCommandeSyst] = useState("");
    const [pvSyst, setPVSyst] = useState("");

    const handleCancel = () => {
        formModif(false);
        tabModif(true);
        detailXfo(false)
    }

    const handleSubmit = () => {

        const formData = new FormData();
        formData.append('ficheAvari', ficheAvari);
        formData.append('ordreService', ordreService);
        formData.append('matRequisition', matRequisition);
        formData.append('bonSorti', bonSorti);
        formData.append('fichMouvt', fichMouvt);
        formData.append('fichRestitution', fichRestitution);
        formData.append('pvManuel', pvManuel);
        formData.append('commandeSyst', commandeSyst);
        formData.append('pvSyst', pvSyst);
        formData.append('depart', depart);
        formData.append('exploitation', exploitation);
        formData.append('poste', poste);
        formData.append("typePoste", typePoste)
        formData.append("codeXfo", codeXfo)
        formData.append("cause", cause)
        formData.append("dateAvarie", dateAvarie)
        formData.append("dateRempl", dateRempl)
        formData.append("observ", observ)
        formData.append("puisSortie", puisSortie)
        formData.append("tensSortie", tensSortie)
        formData.append("typeBorneSorti", typeBorneSorti)
        formData.append("numEneoSorti", numEneoSorti)
        formData.append("numSerieSorti", numSerieSorti)
        formData.append("typeBorneAvari", typeBorneAvari)
        formData.append("anneeXfoSorti", anneeXfoSorti)
        formData.append("marqueXfoSorti", marqueXfoSorti)
        formData.append("puisXfoAvari", puisXfoAvari)
        formData.append("tensionXfoAvari", tensionXfoAvari)
        formData.append("numEneoAvari", numEneoAvari)
        formData.append("numSerieAvari", numSerieAvari)
        formData.append("anneeAvari", anneeAvari)
        formData.append("marqueAvari", marqueAvari)
        formData.append("dateDivs", dateDivs)
        formData.append("coutService", coutService)
        formData.append("coutMateriel", coutMateriel)
        formData.append("commande", commande)
        formData.append("reception", reception)
        formData.append("coordX", coordX)
        formData.append("coordY", coordY)
        formData.append("idUnik", unikId)

        fetch("http://localhost:5500/xfoupdate",
            {
                method: "POST",
                headers:{
                    "Authorization": `Bearer ${token}`
                },
                body: formData
            }
        ).then(res => {
            res.json();
        }).then(data => {
            console.log(data.result);
            formModif(false);
            tabModif(true);
            detailXfo(false);
        }).catch((error) => {
            console.error('Error', error);
        })
    }



    useEffect(() => {
        setIsLoading(false);
    }, [])

    return (

        <>
            {
                isLoading ? <Box><CircularProgress /></Box> :
                    <form>
                        <Stack component='div' margin='5px 0' direction='row' spacing={2} padding='8px 0' justifyContent='space-between'>
                            <div style={{ width: '300px' }}>
                                <TextField
                                    select
                                    label='Depart'
                                    helperText='Choix du départ'
                                    size='normal'
                                    value={depart}
                                    onChange={e => setDepart(e.target.value)}
                                    fullWidth
                                >
                                    {departs.map(dep => {
                                        return (
                                            <MenuItem key={dep.value} value={dep.value}>{dep.label} </MenuItem>
                                        )
                                    })}
                                </TextField>
                            </div>
                            <div style={{ width: '300px' }}>
                                <TextField
                                    select
                                    label='Exploitation'
                                    helperText="Choix de l'Exploitation"
                                    size='normal'
                                    value={exploitation}
                                    onChange={e => setExploitation(e.target.value)}
                                    fullWidth
                                >
                                    {exploitations.map(exploit => {
                                        return (
                                            <MenuItem key={exploit.value} value={exploit.value}> {exploit.label} </MenuItem>
                                        )
                                    })}
                                </TextField>
                            </div>
                            <div style={{ width: '300px' }}>
                                <TextField
                                    label='Nom du poste'
                                    helperText="Saisir le nom du poste"
                                    size='normal'
                                    value={poste}
                                    onChange={e => setPoste(e.target.value)}
                                    fullWidth
                                />
                            </div>
                            <div style={{ width: '300px' }}>
                                <TextField
                                    label='Type de poste'
                                    select
                                    helperText="Choisir Tri ou Mono"
                                    size='normal'
                                    value={typePoste}
                                    onChange={e => setTypePoste(e.target.value)}
                                    fullWidth
                                >
                                    {typePostes.map(type => {
                                        return (
                                            <MenuItem key={type.value} value={type.value}>{type.label}</MenuItem>
                                        )
                                    })}
                                </TextField>
                            </div>

                        </Stack>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} >
                                <TextField
                                    size='normal'
                                    label='Cause avarie'
                                    multiline
                                    maxRows={4}
                                    value={cause}
                                    onChange={e => setCause(e.target.value)}
                                    helperText="la cause identifiée de l'anomalie"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    size='normal'
                                    label='Observations'
                                    multiline
                                    maxRows={4}
                                    value={observ}
                                    onChange={e => setObserv(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} style={{marginTop:'3px'}}>
                            <Grid item xs={12} sm={4}>
                                {/* <TextField
                                    type='date'
                                    helperText='Date avarie'
                                    size='normal'
                                    value={format(new Date(dateAvarie), 'yyy-MM-dd')}
                                    onChange={e => setDateAvarie(e.target.value)}
                                    fullWidth
                                /> */}
                                <DateTimePicker
                                    label={'Date Defaut'}
                                    value={dayjs(dateAvarie)}
                                    onChange={newValue => setDateAvarie(newValue)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                {/* <TextField
                                    type='date'
                                    helperText='Date de remplacement'
                                    size='normal'
                                    value={format(new Date(dateRempl), 'yyy-MM-dd')}
                                    onChange={e => setDateRempl(e.target.value)}
                                    fullWidth
                                /> */}
                                <DateTimePicker
                                    label={'Date remplacement'}
                                    value={dayjs(dateRempl)}
                                    onChange={newValue => setDateRempl(newValue)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                {/* <TextField
                                    type='date'
                                    helperText='Date Info DIVS'
                                    value={format(new Date(dateDivs), 'yyy-MM-dd')}
                                    onChange={e => setDateDivs(e.target.value)}
                                    fullWidth
                                /> */}
                                <DateTimePicker
                                    label={'Date info DIVS'}
                                    value={dayjs(dateDivs)}
                                    onChange={newValue => setDateDivs(newValue)}
                                />
                            </Grid>
                        </Grid>
                        <Stack direction='row' borderBottom='1px solid'>
                            <Typography variant='h5' color='secondary'>Caractéristiques Transformateur avarié</Typography>
                        </Stack>
                        <Grid container spacing={2} my={2}>
                            <Grid item xs={12} sm={4} md={3} >
                                <TextField
                                    select
                                    label='Puissance transfo'
                                    value={puisXfoAvari}
                                    onChange={e => setPuisXfoAvari(e.target.value)}
                                    InputProps={{
                                        startAdornment: <InputAdornment position='start'>kVA</InputAdornment>
                                    }}
                                    helperText='Puissance du transfo déposé'
                                    fullWidth
                                >
                                    {puissances.map(puissance => {
                                        return <MenuItem key={puissance.value} value={puissance.value}>{puissance.label}</MenuItem>
                                    })}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3}>
                                <TextField
                                    select
                                    label='Tension primaire'
                                    value={tensionXfoAvari}
                                    onChange={e => setTensionXfoAvari(e.target.value)}
                                    InputProps={{
                                        startAdornment: <InputAdornment position='start'>kV</InputAdornment>
                                    }}
                                    helperText='Tension primaire du transfo déposé'
                                    fullWidth
                                >
                                    {tensions.map(tension => {
                                        return <MenuItem key={tension.value} value={tension.value}>{tension.label}</MenuItem>
                                    })}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3} >
                                <TextField
                                    select
                                    label='Type de Borne'
                                    value={typeBorneAvari}
                                    onChange={e => setTypeBorneAvari(e.target.value)}
                                    helperText='Embrochable ou porcelaine'
                                    fullWidth
                                >
                                    {typeBornes.map(type => {
                                        return <MenuItem key={type.value} value={type.value}>{type.label}</MenuItem>
                                    })}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3} >
                                {/* <TextField
                                    label='Année de fabrication'
                                    value={anneeAvari}
                                    onChange={e => setAnneeAvari(e.target.value)}
                                    helperText="Renseigner l'année de fabrication"
                                    fullWidth
                                /> */}
                                <DatePicker
                                    label={"Année du transfo"}
                                    value={dayjs(anneeAvari)}
                                    onChange={e => setAnneeAvari(e)}
                                    views={['year']}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label='Numero serie'
                                    value={numSerieAvari}
                                    onChange={e => setNumSerieAvari(e.target.value)}
                                    fullWidth
                                    helperText='Saisir numerie serie du transformateur'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label='Numero Eneo'
                                    value={numEneoAvari}
                                    onChange={e => setNumEneoAvari(e.target.value)}
                                    fullWidth
                                    helperText='Saisir numero Eneo du transformateur'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label='Marque'
                                    value={marqueAvari}
                                    onChange={e => setMarqueAvari(e.target.value)}
                                    fullWidth
                                    helperText='Saisir la marque du transformateur'
                                />
                            </Grid>
                        </Grid>
                        <Stack direction='row' borderBottom='1px solid'>
                            <Typography variant='h5' color='secondary.main'>Caractéristiques Transformateur posé</Typography>
                        </Stack>
                        <Grid container spacing={2} my={2}>
                            <Grid item xs={12} sm={4} md={3} >
                                <TextField
                                    select
                                    label='Puissance transfo'
                                    value={puisSortie}
                                    onChange={e => setPuisSortie(e.target.value)}
                                    InputProps={{
                                        startAdornment: <InputAdornment position='start'>kVA</InputAdornment>
                                    }}
                                    helperText='Puissance du transfo déposé'
                                    fullWidth
                                >
                                    {puissances.map(puissance => {
                                        return <MenuItem key={puissance.value} value={puissance.value}>{puissance.label}</MenuItem>
                                    })}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3}>
                                <TextField
                                    select
                                    label='Tension primaire'
                                    value={tensSortie}
                                    onChange={e => setTensSortie(e.target.value)}
                                    InputProps={{
                                        startAdornment: <InputAdornment position='start'>kV</InputAdornment>
                                    }}
                                    helperText='Tension primaire du transfo déposé'
                                    fullWidth
                                >
                                    {tensions.map(tension => {
                                        return <MenuItem key={tension.value} value={tension.value}>{tension.label}</MenuItem>
                                    })}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3} >
                                <TextField
                                    select
                                    label='Type de Borne'
                                    value={typeBorneSorti}
                                    onChange={e => setTypeBorneSorti(e.target.value)}
                                    helperText='Embrochable ou porcelaine'
                                    fullWidth
                                >
                                    {typeBornes.map(type => {
                                        return <MenuItem key={type.value} value={type.value}>{type.label}</MenuItem>
                                    })}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3} >
                                {/* <TextField
                                    label='Année de fabrication'
                                    value={anneeXfoSorti}
                                    onChange={e => setAnneeXfoSorti(e.target.value)}
                                    helperText="Renseigner l'année de fabrication"
                                    fullWidth
                                /> */}
                                <DatePicker
                                    label={"Année du transfo"}
                                    value={dayjs(anneeXfoSorti)}
                                    onChange={e => setAnneeXfoSorti(e)}
                                    views={['year']}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label='Numero serie'
                                    value={numSerieSorti}
                                    onChange={e => setNumSerieSorti(e.target.value)}
                                    fullWidth
                                    helperText='Saisir numerie serie du transformateur'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label='Numero Eneo'
                                    value={numEneoSorti}
                                    onChange={e => setNumEneoSorti(e.target.value)}
                                    fullWidth
                                    helperText='Saisir numero Eneo du transformateur'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label='Marque'
                                    value={marqueXfoSorti}
                                    onChange={e => setMarqueXfoSorti(e.target.value)}
                                    fullWidth
                                    helperText='Saisir la marque du transformateur'
                                />
                            </Grid>
                        </Grid>
                        <Stack direction='row' borderBottom='1px solid'>
                            <Typography variant='h5' color='secondary.main'>Géolocalisation</Typography>
                        </Stack>
                        <Grid container spacing={2} style={{ marginTop: '10px' }}>
                            <Grid item xs={6}>
                                <TextField
                                    label='Latitude'
                                    value={coordX}
                                    onChange={e => setCoordX(e.target.value)}
                                    helperText='Saisir la latitude du poste, Expl: 13.2564'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label='Longitude'
                                    value={coordY}
                                    onChange={e => setCoordY(e.target.value)}
                                    helperText='Saisir la longitude du poste, Expl: 14.2004'
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Stack direction='row' borderBottom='1px solid'>
                            <Typography variant='h5' color='primary.main'>Documentations</Typography>
                        </Stack>
                        <Grid container spacing={2} style={{ marginTop: '10px', marginBottom: '10px' }}>
                            <Grid item xs={4} >
                                <label htmlFor="FicheAvarie" style={{ fontSize: "18px", color: '#1976d2', fontWeight: 'bold' }}>
                                    Fiche avarie :
                                    <br /><br />
                                    <input onChange={(e) => setFicheAvari(e.target.files[0])} type="file" name='FicheAvarie' id='FicheAvarie' style={{ width: "400px" }} />
                                </label>
                            </Grid>
                            <Grid item xs={4}>
                                <label htmlFor="OrdreService" style={{ fontSize: "18px", color: '#1976d2', fontWeight: 'bold' }} >
                                    Ordre service :
                                    <br /><br />
                                    <input onChange={(e) => setOrdreService(e.target.files[0])} type="file" name='OrdreService' id='OrdreService' style={{ width: "400px" }} />
                                </label>
                            </Grid>
                            <Grid item xs={4} >
                                <label htmlFor="MatRequisition" style={{ fontSize: "18px", color: '#1976d2', fontWeight: 'bold' }} >
                                    Demande Materiel :
                                    <br /><br />
                                    <input onChange={(e) => setMatRequision(e.target.files[0])} type="file" name='MatRequisition' id='MatRequisition' style={{ width: "400px" }} />
                                </label>
                            </Grid>
                            <Grid item xs={4} >
                                <label htmlFor="BonSorti" style={{ fontSize: "18px", color: '#1976d2', fontWeight: 'bold' }} >
                                    Bon de sortie :
                                    <br /><br />
                                    <input onChange={(e) => setBonSorti(e.target.files[0])} type="file" name='BonSorti' id='BonSorti' style={{ width: "400px" }} />
                                </label>
                            </Grid>
                            <Grid item xs={4} >
                                <label htmlFor="FicheMouvt" style={{ fontSize: "18px", color: '#1976d2', fontWeight: 'bold' }}>
                                    Fiche Mouvement :
                                    <br /><br />
                                    <input onChange={(e) => setFicheMouvt(e.target.files[0])} type="file" name='FicheMouvt' id='FicheMouvt' style={{ width: "400px" }} />
                                </label>
                            </Grid>
                            <Grid item xs={3} >
                                <label htmlFor="FichRestitution" style={{ fontSize: "18px", color: '#1976d2', fontWeight: 'bold' }}>
                                    Fiche de restitution :
                                    <br /><br />
                                    <input onChange={(e) => setFichRestitution(e.target.files[0])} type="file" name='FichRestitution' id='FichRestitution' style={{ width: "400px" }} />
                                </label>
                            </Grid>
                            <Grid item xs={4} >
                                <label htmlFor="PVManuel" style={{ fontSize: "18px", color: '#1976d2', fontWeight: 'bold' }}>
                                    PV Manuel :
                                    <br /><br />
                                    <input onChange={(e) => setPVManuel(e.target.files[0])} type="file" name='PVManuel' id='PVManuel' style={{ width: "400px" }} />
                                </label>
                            </Grid>
                            <Grid item xs={4} >
                                <label htmlFor="CommandeSyst" style={{ fontSize: "18px", color: '#1976d2', fontWeight: 'bold' }}>
                                    Commande système :
                                    <br /><br />
                                    <input onChange={(e) => setCommandeSyst(e.target.files[0])} type="file" name='CommandeSyst' id='CommandeSyst' style={{ width: "400px" }} />
                                </label>
                            </Grid>
                            <Grid item xs={4} >
                                <label htmlFor="PVSyst" style={{ fontSize: "18px", color: '#1976d2', fontWeight: 'bold' }}>
                                    PV Système :
                                    <br /><br />
                                    <input onChange={(e) => setPVSyst(e.target.files[0])} type="file" name='PVSyst' id='PVSyst' style={{ width: "400px" }} />
                                </label>
                            </Grid>
                        </Grid>
                        <Stack direction='row' borderBottom='1px solid'>
                            <Typography variant='h5' color='secondary.main'>Coût et cloture</Typography>
                        </Stack>
                        <Grid container spacing={2} style={{ marginTop: '10px' }}>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    label='Cout du service'
                                    value={coutService}
                                    onChange={e => setCoutService(e.target.value)}
                                    type='number'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    label='Cout du materiel'
                                    value={coutMateriel}
                                    onChange={e => setCoutMateriel(e.target.value)}
                                    type='number'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    label='Numero commande'
                                    value={commande}
                                    onChange={e => setCommande(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    label='Numero reception'
                                    value={reception}
                                    onChange={e => setReception(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Stack direction='row' justifyContent='end' paddingRight='30px' margin='20px 0 0 0' spacing={4}>
                            <Button variant='contained' size='normal' color='secondary' onClick={handleSubmit}>soumettre</Button>
                            <Button variant='contained' size='normal' color='warning' onClick={handleCancel}>Annuler</Button>
                        </Stack>
                    </form>
            }
        </>





    )
}

export default FormModifXfoCrame;
