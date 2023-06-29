import React from 'react'
import { Typography, Paper } from '@mui/material';
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvent } from 'react-leaflet';

const LeafletDerivation = ({ derivations }) => {
    return (
        <Paper elevation={10} style={{ padding: '5px', height:'100%' }}>
            <Typography>Données GIS des dérivations</Typography>

            <div style={{display:'flex', justifyContent:'center', margin:'10px 0 10px 0'}} >
                <MapContainer center={[4.577257, 13.684589]} zoom={10} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {derivations.map(derivation => {
                        if (derivation.latitude == "" || derivation.longitude == "") {
                            return;
                        } else {
                            return <Marker key={derivation._id} position={[parseFloat(derivation.latitude), parseFloat(derivation.longitude)]}>
                                <Popup position={[parseFloat(derivation.latitude), parseFloat(derivation.longitude)]}>
                                    <div>
                                        <p style={{ fontWeight: 'bold' }}> Nom : {derivation.nomderiv}</p>
                                        <p> <strong>Etat :</strong>  {derivation.etat}</p>
                                        <p> <strong>Nbr poste :</strong>  {derivation.nbrPoste}</p>
                                    </div>
                                </Popup>
                            </Marker>
                        }

                    })}

                </MapContainer>
            </div>

        </Paper>
    )
}

export default LeafletDerivation
