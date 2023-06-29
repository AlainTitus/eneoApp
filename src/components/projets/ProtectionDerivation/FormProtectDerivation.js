import React, { useState } from 'react';
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import { Typography, Grid, Button } from '@mui/material';
import { Paper } from '@mui/material';
import * as Yup from 'yup'
import FormController from '../../../public/form/derivations/FormController';


const list_exploitations = [
    {
        key: "choix de l'exploitation",
        value: ""
    },
    {
        key: "Bertoua",
        value: "BERTOUA"
    },
    {
        key: "Abong Mbang",
        value: "ABONG MBANG"
    },
    {
        key: "Belabo",
        value: "BELABO"
    },
    {
        key: "Batouri",
        value: "BATOURI"
    },
    {
        key: "Lomie",
        value: "LOMIE"
    },
    {
        key: 'Yokadouma',
        value: "YOKADOUMA"
    },
    {
        key: 'Moloundou',
        value: "MOLOUNDOU"
    },
    {
        key: "Garoua Boulai",
        value: "GAROUA BOULAI"
    },
    {
        key: "Betare_Oya",
        value: "BETARE OYA"
    }
];
const list_departs = [
    {
        key: 'Choix du départ',
        value: ''
    },
    {
        key: "D11 Bertoua",
        value: 'D11 BERTOUA'
    },
    {
        key: "D12 Bertoua",
        value: 'D12 BERTOUA'
    },
    {
        key: "D32 Belabo",
        value: 'D32 BELABO'
    },
    {
        key: "A32 BERTOUA",
        value: 'A32 BERTOUA'
    },
    {
        key: "D31 Abong Mbang",
        value: 'D31 ABONG MBANG'
    },
    {
        key: "D31 Lomié",
        value: 'D31 LOMIE'
    },
    {
        key: "D31 Batouri",
        value: 'D31 BATOURI'
    },
    {
        key: "D11 Yokadouma",
        value: 'D11 YOKADOUMA'
    },
    {
        key: "D31 Moloundou",
        value: 'D31 MOLOUNDOU'
    },
    {
        key: "D31 Garoua Boulai",
        value: 'D31 GAROUA BOULAI'
    },
    {
        key: "D31 Betare Oya",
        value: 'D31 BETARE OYA'
    },
];

const list_types = [
    {
        key: 'Type de dérivation',
        value: ''
    },
    {
        key: 'Mono',
        value: 'MONO'
    },
    {
        key: 'Tri',
        value: 'TRI'
    }
];
const list_tensions = [
    {
        key: 'choix tension réseau',
        value: ''
    },
    {
        key: '15kV',
        value: 15
    },
    {
        key: '30kV',
        value: 30
    }
];
const list_etats = [
    {
        key: 'Oui / Non',
        value: ''
    },
    {
        key: 'Oui',
        value: 'protégé'
    },
    {
        key: 'Non',
        value: 'Non protégé'
    }
];
const list_connectiques = [
    {
        key: 'Choix connectique',
        value: ''
    },
    {
        key: 'Connecteur à anneau',
        value: 'Connecteur à anneau'
    },
    {
        key: 'Bloc dédoublement',
        value: 'Bloc dédoublement'
    },
    {
        key: 'Epissure de câble',
        value: 'Epissures'
    },
    {
        key: 'Autre',
        value: 'Autre'
    }
];
const list_positions = [
    {
        key: 'Choix de la position',
        value: ''
    },
    {
        key: 'Support de dérivation',
        value: 'dérivation'
    },
    {
        key: 'Support adjacent',
        value: 'adjacent'
    },
    {
        key: 'Autre support',
        value: 'autre'
    }
];
const list_typesupport = [
    {
        key: 'Type de support',
        value: ''
    },
    {
        key: 'Support béton',
        value: 'béton'
    },
    {
        key: 'Support bois',
        value: 'bois'
    },
    {
        key: 'Support métallique',
        value: 'métallique'
    }
]
const initialValues = {
    nomderiv: '',
    depart: '',
    troncon: '',
    exploitation: '',
    type: '',
    tension: '',
    etat: '',
    connectique: '',
    position: '',
    typesupport: '',
    longueur: "",
    nbrPoste: "",
    puistotale: "",
    dateprotection: null,
    latitude: '',
    longitude: '',
    commentaire: ''
};


const validationSchema = Yup.object({
    nomderiv: Yup.string().required('Required!'),
    depart: Yup.string().required('Required!'),
    troncon: Yup.string().required('Required!'),
    exploitation: Yup.string().required('Required!'),
    type: Yup.string().required('Required!'),
    tension: Yup.string().required('Required!'),
    commentaire: Yup.string().required('Required!')
})

const FormProtectDerivation = ({ token }) => {

    const onSubmit = values => {
        console.log('Form data ', values);
        fetch('http://localhost:5500/nouvellederivation',
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            }
        ).then(res => {
            return res.json();
        }).then(data => {
            console.log(data.result)
        }).catch(err => console.log(err))
    }


    return (
        <Paper style={{ padding: '8px', marginTop: '5px' }}>
            <Typography variant='h6' component='h6' style={{color:'#1976d2'}} >
                Formulaire d'enregistrement:
            </Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {
                    formik => {
                        return (
                            <Form>
                                <Grid container spacing={2.5}>
                                    <Grid item md={3}>
                                        <FormController
                                            control='input'
                                            label='Nom de la dérivation:'
                                            name='nomderiv'
                                            type='text'
                                        />
                                    </Grid>
                                    <Grid item md={3}>
                                        <FormController
                                            control='select'
                                            label='Exploitation:'
                                            name='exploitation'
                                            options={list_exploitations}
                                        />
                                    </Grid>
                                    <Grid item md={3}>
                                        <FormController
                                            control='select'
                                            label='Nom du départ:'
                                            name='depart'
                                            options={list_departs}
                                        />
                                    </Grid>
                                    <Grid item md={3}>
                                        <FormController
                                            control='input'
                                            label='Tronçon:'
                                            name='troncon'
                                            type='text'
                                        />
                                    </Grid>

                                    <Grid item md={3}>
                                        <FormController
                                            control='select'
                                            label='Type:'
                                            name='type'
                                            options={list_types}
                                        />
                                    </Grid>
                                    <Grid item md={3}>
                                        <FormController
                                            control='select'
                                            label='Tension:'
                                            name='tension'
                                            options={list_tensions}
                                        />
                                    </Grid>
                                    <Grid item md={3}>
                                        <FormController
                                            control='select'
                                            label='Protégé ?'
                                            name='etat'
                                            options={list_etats}
                                        />
                                    </Grid>
                                    <Grid item md={3}>
                                        <FormController
                                            control='select'
                                            label='Connectique:'
                                            name='connectique'
                                            options={list_connectiques}
                                        />
                                    </Grid>
                                    <Grid item md={3}>
                                        <FormController
                                            control='select'
                                            label='Position du CC:'
                                            name='position'
                                            options={list_positions}
                                        />
                                    </Grid>
                                    <Grid item md={3}>
                                        <FormController
                                            control='select'
                                            label='Nature support dérivation :'
                                            name='typesupport'
                                            options={list_typesupport}
                                        />
                                    </Grid>
                                    <Grid item md={3}>
                                        <FormController
                                            control='input'
                                            label='Longueur dérivation (m):'
                                            name='longueur'
                                            type='number'
                                        />
                                    </Grid>
                                    <Grid item md={3}>
                                        <FormController
                                            control='input'
                                            label='Nombre de poste:'
                                            name='nbrPoste'
                                            type='number'
                                        />
                                    </Grid>
                                    <Grid item md={3}>
                                        <FormController
                                            control='input'
                                            label='Puissance installée:'
                                            name='puistotale'
                                            type='number'
                                        />
                                    </Grid>
                                    <Grid item md={3}>
                                        <FormController
                                            control='input'
                                            label='Latitude:'
                                            name='latitude'
                                            type='text'
                                        />
                                    </Grid>
                                    <Grid item md={3}>
                                        <FormController
                                            control='input'
                                            label='Longitude:'
                                            name='longitude'
                                            type='text'
                                        />
                                    </Grid>
                                    <Grid item md={3}>
                                        <FormController
                                            control='date'
                                            label='Date protection:'
                                            name='dateprotection'
                                        />
                                    </Grid>
                                    <Grid item md={6}>
                                        <FormController
                                            control='textarea'
                                            label='Observation importante:'
                                            name='commentaire'
                                        />
                                    </Grid>
                                </Grid>
                                <div style={{ margin: '10px 0' }}>
                                    <Button variant='contained' type='submit'>SUBMIT</Button>
                                </div>

                            </Form>
                        )
                    }
                }
            </Formik>
        </Paper>
    )
}

export default FormProtectDerivation
