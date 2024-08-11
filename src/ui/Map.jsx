import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';

import mapPin from '/public/icons/pin.svg'

import './Map.css';

function Map() {
  const position = [50.2813, 19.5657];

  const legalIcon = new Icon({
    iconUrl: { mapPin },
    iconSize: [40, 40],
  });

  return (
    <div className='map-wrapper'>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className='map'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={legalIcon} />
      </MapContainer>
    </div>
  )
}

export default Map;
