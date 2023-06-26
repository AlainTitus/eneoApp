import React, { useEffect, useState } from 'react';
import {
    TextField, Stack, MenuItem, Grid, Typography, Button, InputAdornment, Paper,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers';


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




const FormXfoCrame = ({ setListXfoCrames, token }) => {
    const [depart, setDepart] = useState("");
    const [exploitation, setExploitation] = useState("");
    const [poste, setPoste] = useState("");
    const [typePoste, setTypePoste] = useState("");
    const [codeXfo, setCodeXfo] = useState("");
    const [cause, setCause] = useState('');
    const [dateAvarie, setDateAvarie] = useState("");
    const [dateRempl, setDateRempl] = useState('');
    const [observ, setObserv] = useState("");
    const [puisSortie, setPuisSortie] = useState('');
    const [tensSortie, setTensSortie] = useState('');
    const [typeBorneSorti, setTypeBorneSorti] = useState('');
    const [numEneoSorti, setNumEneoSorti] = useState('');
    const [numSerieSorti, setNumSerieSorti] = useState('');
    const [typeBorneAvari, setTypeBorneAvari] = useState('')
    const [anneeXfoSorti, setAnneeXfoSorti] = useState('');
    const [marqueXfoSorti, setMarqueXfoSorti] = useState('');
    const [puisXfoAvari, setPuisXfoAvari] = useState('');
    const [tensionXfoAvari, setTensionXfoAvari] = useState('');
    const [numEneoAvari, setNumEneoAvari] = useState('');
    const [numSerieAvari, setNumSerieAvari] = useState('');
    const [anneeAvari, setAnneeAvari] = useState('');
    const [marqueAvari, setMarqueAvari] = useState('');
    const [dateDivs, setDateDivs] = useState('');
    const [coutService, setCoutService] = useState('');
    const [coutMateriel, setCoutMateriel] = useState('');
    const [commande, setCommande] = useState('');
    const [reception, setReception] = useState("");
    const [coordX, setCoordX] = useState('');
    const [coordY, setCoordY] = useState('');

    const [ficheAvari, setFicheAvari] = useState("");
    const [ordreService, setOrdreService] = useState("");
    const [matRequisition, setMatRequision] = useState("");
    const [bonSorti, setBonSorti] = useState("");
    const [fichMouvt, setFicheMouvt] = useState("");
    const [fichRestitution, setFichRestitution] = useState("");
    const [pvManuel, setPVManuel] = useState("");
    const [commandeSyst, setCommandeSyst] = useState("");
    const [pvSyst, setPVSyst] = useState("");


    const [open, setOpen] = useState(false);

    const handleLoadForm = () => {
        setOpen(true)
    }
    const handleValidForm = () => {
        let transfo = {
            depart, exploitation, poste, typePoste, codeXfo, cause, dateAvarie, dateRempl, observ, puisSortie, tensSortie, typeBorneSorti, numEneoSorti,
            numSerieSorti, typeBorneAvari, anneeXfoSorti, marqueXfoSorti, puisXfoAvari, tensionXfoAvari, numEneoAvari, numSerieAvari, anneeAvari, marqueAvari, dateDivs,
            coutService, coutMateriel, commande, reception, coordX, coordY
        }
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

        fetch("http://localhost:5500/xfo",
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: formData
            }
        ).then(res => {
            res.json();
        }).then(data =>{
            console.log(data.result);
            setOpen(false);
        }).catch((error) => {
            console.error('Error', error);
        });
    }

    // useEffect(() => {
    //     fetch("http://localhost:5500/listxfos",
    //     {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': `Bearer ${token}`,
    //             'Content-Type': 'application/json'
    //         }
    //     }
    //     )
    //         .then(res => res.json())
    //         .then(datas => {
    //             setListXfoCrames(datas)
    //         })
    // }, [])

    return (
        <Paper style={{ padding: '5px', marginTop: '5px' }}>
            <form>
                <Stack component='div' margin='5px 0' direction='row' spacing={2} padding='8px 0' justifyContent='space-between'>

                    <div style={{ width: '300px' }}>
                        <TextField
                            select
                            label='Depart'
                            helperText='Choix du départ'
                            size='normal'
                            value={depart}
                            onChange={(e) => setDepart(e.target.value)}
                            fullWidth
                        >
                            {departs.map(depart => {
                                return (
                                    <MenuItem key={depart.value} value={depart.value}>{depart.label} </MenuItem>
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
                            onChange={(e) => setExploitation(e.target.value)}
                            fullWidth
                        >
                            {exploitations.map(exploitation => {
                                return (
                                    <MenuItem key={exploitation.value} value={exploitation.value}> {exploitation.label} </MenuItem>
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
                            onChange={(e) => setPoste(e.target.value)}
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
                            onChange={(e) => setTypePoste(e.target.value)}
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
                <Grid container spacing={2} style={{ marginBottom: '10px' }}>
                    <Grid item xs={12} sm={2} >
                        <TextField
                            size='normal'
                            label='Code du poste'
                            value={codeXfo}
                            onChange={e => setCodeXfo(e.target.value)}
                            helperText="le code du poste"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={5} >
                        <TextField
                            size='normal'
                            label='Cause avarie'
                            multiline
                            value={cause}
                            onChange={e => setCause(e.target.value)}
                            maxRows={4}
                            helperText="la cause identifiée de l'anomalie"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <TextField
                            size='normal'
                            label='Observations'
                            value={observ}
                            onChange={e => setObserv(e.target.value)}
                            multiline
                            maxRows={4}
                            fullWidth
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2} style={{ marginBottom: '10px' }}>
                    <Grid item xs={12} sm={4}>
                        {/* <TextField
                            type='date'
                            helperText='Date avarie'
                            value={dateAvarie}
                            onChange={e => setDateAvarie(e.target.value)}
                            size='normal'
                            fullWidth
                        /> */}

                        <DateTimePicker
                            label={'Date Defaut'}
                            value={dateAvarie}
                            onChange={newValue => setDateAvarie(newValue)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {/* <TextField
                            type='date'
                            helperText='Date de remplacement'
                            value={dateRempl}
                            onChange={e => setDateRempl(e.target.value)}
                            size='normal'
                            fullWidth
                        /> */}
                        <DateTimePicker
                            label={'Date Remplacement'}
                            value={dateRempl}
                            onChange={newValue => setDateRempl(newValue)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {/* <TextField
                            type='date'
                            value={dateDivs}
                            onChange={e => setDateDivs(e.target.value)}
                            helperText='Date Info DIVS'
                            fullWidth
                        /> */}
                        <DateTimePicker
                            label={'Date information'}
                            value={dateDivs}
                            onChange={newValue => setDateDivs(newValue)}
                        />
                    </Grid>
                </Grid>
                <Stack direction='row' borderBottom='1px solid'>
                    <Typography variant='h5' color='primary.main'>Caractéristiques Transformateur avarié</Typography>
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
                            value={anneeAvari}
                            onChange={e => setAnneeAvari(e)}
                            views={['year']}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginBottom: '10px' }}>
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
                    <Typography variant='h5' color='primary.main'>Caractéristiques Transformateur posé</Typography>
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
                            value={typeBorneSorti}
                            onChange={e => setTypeBorneSorti(e.target.value)}
                            label='Type de Borne'
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
                            value={anneeXfoSorti}
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
                    <Typography variant='h5' color='primary.main'>Géolocalisation</Typography>
                </Stack>
                <Grid container spacing={2} style={{ marginTop: '10px', marginBottom: '10px' }}>
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
                    <Typography variant='h5' color='primary.main'>Coût et cloture</Typography>
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
                <Stack direction='row' justifyContent='end' paddingRight='30px' margin='20px 0 0 0'>
                    <Button variant='contained' size='normal' onClick={handleLoadForm}>soumettre</Button>
                </Stack>
            </form>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelBy='dialog-title'
                aria-describedby='dialog-description'
                fullWidth={true}
                maxWidth='sm'
            >
                <DialogTitle id='dialog-title'>
                    Ajout des informations dans la base de données !
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id='dialog-description'>
                        Confirmez-vous l'enregistrement des données saisies ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} size='large'>Annuler</Button>
                    <Button autofocus onClick={handleValidForm} size='large'>Valider</Button>
                </DialogActions>
            </Dialog>
        </Paper>

    )
}

export default FormXfoCrame;
