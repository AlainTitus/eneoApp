import React, { useState } from 'react'
import { Button, FormControl, Typography, FormControlLabel, RadioGroup, Radio, FormLabel } from '@mui/material';
import TestAvailableDoc from './TestAvailableDoc';

const DetailXfo = ({ detailElem, formModif, detailXfo, tabModif }) => {

    const [valueRadio, setValueRadio] = useState('fichAvarie')

    const handleClick = () => {
        formModif(false);
        detailXfo(false);
        tabModif(true);
    }

    const handleChange = (e)=>{
        setValueRadio(e.target.value)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', paddingLeft: '8px' }}>
                <div style={{ flexGrow: '2', height: '480px', marginRight: '10px' }}>
                    <div>
                        <Typography variant='h6' color='primary.main'>Caractéristiques techniques du transformateur :</Typography>
                        <hr />
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <Typography variant='h6'>Données générales :</Typography>
                        <div style={{ margin: '8px 0 0 5px' }}>
                            <p> <strong style={{ display: 'inline-block', width: '150px' }}>Nom du poste :</strong> <span>: {detailElem.Nom_Poste}</span></p>
                            <p> <strong style={{ display: 'inline-block', width: '150px' }}>Exploitation :</strong> <span>: {detailElem.Exploitation}</span></p>
                            <p> <strong style={{ display: 'inline-block', width: '150px' }}>Départ :</strong> <span>: {detailElem.Depart}</span></p>
                            <p> <strong style={{ display: 'inline-block', width: '150px' }}>Cause avarie :</strong> <span>: {detailElem.Cause_Avarie}</span></p>
                            <p> <strong style={{ display: 'inline-block', width: '150px' }}>Date avarie :</strong> <span>: {detailElem.Date_Info_Avarie}</span></p>
                        </div>
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <Typography variant='h6'>Infos transfo avarié :</Typography>
                        <div style={{ margin: '8px 0 0 5px' }}>
                            <p> <strong style={{ display: 'inline-block', width: '150px' }}>Puissance (kVA)</strong> <span>: {detailElem.Puis_Xfo_Avarie}</span></p>
                            <p> <strong style={{ display: 'inline-block', width: '150px' }}>Marque </strong> <span>: {detailElem.Marque_Xfo_Avarie}</span></p>
                            <p> <strong style={{ display: 'inline-block', width: '150px' }}>Année fabrication </strong> <span>: {detailElem.Annee_Xfo_Avarie}</span></p>
                            <p> <strong style={{ display: 'inline-block', width: '150px' }}>Numero serie </strong> <span>: {detailElem.NumSerie_Xfo_Avarie}</span></p>
                            <p> <strong style={{ display: 'inline-block', width: '150px' }}>Numero Eneo </strong> <span>: {detailElem.NumEneo_Xfo_Avarie}</span></p>
                        </div>
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <Typography variant='h6'>Infos transfo posé :</Typography>
                        <div style={{ margin: '8px 0 0 5px' }}>
                            <p> <strong style={{ display: 'inline-block', width: '150px' }}>Puissance (kVA):</strong> <span>: {detailElem.Puis_Xfo_Sorti}</span></p>
                            <p> <strong style={{ display: 'inline-block', width: '150px' }}>Marque </strong> <span>: {detailElem.Marque_Xfo_Sorti}</span></p>
                            <p> <strong style={{ display: 'inline-block', width: '150px' }}>Année fabrication </strong> <span>: {detailElem.Annee_Xfo_Sorti}</span></p>
                            <p> <strong style={{ display: 'inline-block', width: '150px' }}>Numero serie </strong> <span>: {detailElem.NumSerie_Xfo_Sorti}</span></p>
                            <p> <strong style={{ display: 'inline-block', width: '150px' }}>Numero Eneo </strong> <span>: {detailElem.NumEneo_Xfo_Sorti}</span></p>
                        </div>
                    </div>
                </div>
                <div style={{ maxWidth: '500px', flexGrow: '1' }}>
                    <Typography variant='h6' color='primary.main'>Image du poste :</Typography>
                    <hr />
                    <div style={{marginTop:'5px'}}>
                        <img src={`http://localhost:5500/${detailElem.image.data}`} alt="une image" width='498px' />
                    </div>
                </div>
            </div>
            <div style={{paddingLeft:'20px'}}>
                <Button variant='contained' onClick={handleClick} style={{ margin: '20px 0 0 0' }}>Retour</Button>
            </div>
            <Typography variant='h6' style={{ marginTop: '20px' }} color='primary.main'> Visualisation des documents du transformateur : </Typography>
            <hr />
            <div style={{display: 'flex'}}>
                <div style={{marginRight:'30px', flexGrow:'1'}}>
                    <FormControl style={{ padding: '10px 0 0 5px' }}>
                        <FormLabel style={{ fontWeight: 'bold' }}>Documents transformateur :</FormLabel>
                        <RadioGroup
                            name='document'
                            defaultValue="avarie"
                            onChange={handleChange}
                        >
                            <FormControlLabel
                                value='avarie'
                                control={<Radio />}
                                label={<TestAvailableDoc label='Fiche avarie' value={detailElem.image.FicheAvar}/>}
                                labelPlacement='start'
                            />
                            <FormControlLabel
                                value='fichMvt'
                                control={<Radio />}
                                label={<TestAvailableDoc label='Fiche Mouv' value={detailElem.image.FicheMouvt}/>}
                                labelPlacement='start'
                            />
                            <FormControlLabel
                                value='oS'
                                control={<Radio />}
                                label={<TestAvailableDoc label='Ordre service' value={detailElem.image.OrdreService}/>}
                                labelPlacement='start'
                            />
                            <FormControlLabel
                                value='dM'
                                control={<Radio />}
                                label={<TestAvailableDoc label='Demande Mat' value={detailElem.image.MatRequisition}/>}
                                labelPlacement='start'
                            />
                            <FormControlLabel
                                value='ficheRest'
                                control={<Radio />}
                                label={<TestAvailableDoc label='Fiche rest' value={detailElem.image.FicheRest}/>}
                                labelPlacement='start'
                            />
                            <FormControlLabel
                                value='pvMan'
                                control={<Radio />}
                                label={<TestAvailableDoc label='PV Manuel' value={detailElem.image.PVManuel}/>}
                                labelPlacement='start'
                            />
                            <FormControlLabel
                                value='BonSorti'
                                control={<Radio />}
                                label={<TestAvailableDoc label='Bon sorti' value={detailElem.image.BonSortie}/>}
                                labelPlacement='start'
                            />
                            <FormControlLabel
                                value='commande'
                                control={<Radio />}
                                label={<TestAvailableDoc label='Commande' value={detailElem.image.CommandeSystem}/>}
                                labelPlacement='start'
                            />
                            <FormControlLabel
                                value='pvSystem'
                                control={<Radio />}
                                label={<TestAvailableDoc label='PV Systm' value={detailElem.image.PVSystem}/>}
                                labelPlacement='start'
                            />


                        </RadioGroup>
                    </FormControl>
                </div>
                <div style={{width:'500px', borderLeft:'1px solid', padding:'10px 0 0 10px', display: 'flex', justifyContent:'center', alignItems:'center', flexGrow:'3'}}>
                    {valueRadio == "avarie" && <img src={`http://localhost:5500/${detailElem.image.FicheAvar}`}  style={{width:'500px'}}/> }
                    {valueRadio == "fichMvt" && <img src={`http://localhost:5500/${detailElem.image.FicheMouvt}`} style={{width:'500px'}}/>}
                    {valueRadio == "oS" && <img src={`http://localhost:5500/${detailElem.image.OrdreService}`} style={{width:'500px'}}/>}
                    {valueRadio == "dM" && <img src={`http://localhost:5500/${detailElem.image.MatRequisition}`} style={{width:'500px'}}/>}
                    {valueRadio == "ficheRest" && <img src={`http://localhost:5500/${detailElem.image.FicheRest}`} style={{width:'500px'}}/>}
                    {valueRadio == "pvMan" && <img src={`http://localhost:5500/${detailElem.image.PVManuel}`} style={{width:'500px'}}/>}
                    {valueRadio == "BonSorti" && <img src={`http://localhost:5500/${detailElem.image.BonSortie}`} style={{width:'500px'}}/>}
                    {valueRadio == "commande" && <img src={`http://localhost:5500/${detailElem.image.CommandeSystem}`} style={{width:'500px'}}/>}
                    {valueRadio == "pvSystem" && <img src={`http://localhost:5500/${detailElem.image.PVSystem}`} style={{width:'500px'}}/>}
                </div>
            </div>
            <div style={{paddingLeft:'20px'}}>
                <Button variant='contained' onClick={handleClick} style={{ margin: '20px 0 0 0' }}>Retour</Button>
            </div>
        </div>
    )
}

export default DetailXfo
