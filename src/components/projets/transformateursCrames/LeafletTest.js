import React from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvent } from 'react-leaflet';

const LeafletTest = ({ listTransfos }) => {

    return (
        <MapContainer center={[4.577257, 13.684589]} zoom={10} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {listTransfos.map(transfo => {
                if (transfo.Coord_X == "" || transfo.Coord_Y == "") {
                    return;
                } else {
                    return <Marker key={transfo._id} position={[parseFloat(transfo.Coord_X), parseFloat(transfo.Coord_Y)]}>
                        <Popup position={[parseFloat(transfo.Coord_X), parseFloat(transfo.Coord_Y)]}>
                            <div>
                                <p style={{ fontWeight: 'bold' }}> Poste : {transfo.Nom_Poste}</p>
                                <p> <strong>Puiss :</strong>  {transfo.Puis_Xfo_Sorti + " kVA"}</p>
                                <p> <strong>Exploitation :</strong>  {transfo.Exploitation}</p>
                            </div>
                        </Popup>
                    </Marker>
                }

            })}

        </MapContainer>
    )
}

export default LeafletTest
