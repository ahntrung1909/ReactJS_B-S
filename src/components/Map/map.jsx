import './map.scss'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet'
import Pin from '../Pin/pin.jsx';


function Map({items}) {
    const position = [51.5074, -0.1278]

    return(
            <MapContainer center={position} zoom={7} scrollWheelZoom={false} className='map'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {items.map((item) => (
                    <Pin key={item.id} item={item}></Pin>
                ))}
            </MapContainer>
    )
}

export default Map