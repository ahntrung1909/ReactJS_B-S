import './pin.scss'
import 'leaflet/dist/leaflet.css';
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'


function Pin({item}) {
    return(
        <Marker position={[item.latitude, item.longitude]}>
            <Popup>
                <div className="popup-container">
                    <img src={item.image} alt="" />
                    <div className="text-container">
                        <Link to={`/${item.id}`}>{item.title}</Link>
                        <span>{item.bedroom} bedrooms</span>
                        <b>$ {item.price}</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}

export default Pin