import React, { useState } from 'react';
import { Paper } from '@mui/material';
import FormModifXfoCrame from './FormModifXfoCrame';
import TableModifXfo from './TableModifXfo';
import DetailXfo from './DetailXfo';

const ModifXfoCrames = ({listXfoCrames, setListXfoCrames, token}) => {
  const [formModif, setFormModif] = useState(false);
  const [tabModif, setTableModif] = useState(true);
  const [detailXfo, setDetailXfo] = useState(false);
  const [detailElem, setDetailElem] = useState({})
  const [transfoUpdate, setTransfoUpdate] = useState({
    Code: "",
    Depart: "",
    Exploitation: "",
    Nom_Poste: "",
    Cause_Avarie: "",
    Date_Info_Avarie: "",
    Date_Remplacement: "",
    Date_Sortie_Xfo: "",
    Observation_sur_delais: "",
    Puis_Xfo_Sorti: "",
    Tension_Xfo_Sorti: "",
    Type_Borne: "",
    NumEneo_Xfo_Sorti: "",
    NumSerie_Xfo_Sorti: "",
    Annee_Xfo_Sorti: "",
    Marque_Xfo_Sorti: "",
    Etat_Xfo_Sorti: "",
    Puis_Xfo_Avarie: "",
    Tension_Xfo_Avarie: "",
    Type_Borne_XfoAvarie: "",
    NumEneo_Xfo_Avarie: "",
    NumSerie_Xfo_Avarie: "",
    Annee_Xfo_Avarie: "",
    Marque_Xfo_Avarie: "",
    Etat_Xfo_Avarie: "",
    Demandeur: "",
    Telephone: "",
    Date_Info_Divs: "",
    Cout_Service: 1,
    Cout_Materiel: 1,
    Commande: "",
    Reception: "",
    Coord_X: "",
    Coord_Y: "",
    Type: ""
  })
  return (
    <Paper style={{padding:'5px', marginTop:'5px'}}>
      {formModif && <FormModifXfoCrame token={token} formModif={setFormModif} tabModif={setTableModif} detailXfo={setDetailXfo} transfo={transfoUpdate}  />}
      {tabModif && <TableModifXfo token={token} setListXfoCrames={setListXfoCrames} setDetailElem={setDetailElem} formModif={setFormModif} tabModif={setTableModif} detailXfo={setDetailXfo} transfoDisplay={setTransfoUpdate} listXfoCrames={listXfoCrames} />}
      {detailXfo && <DetailXfo formModif={setFormModif} tabModif={setTableModif} detailXfo={setDetailXfo} detailElem={detailElem}/>}
    </Paper>
  )
}

export default ModifXfoCrames
