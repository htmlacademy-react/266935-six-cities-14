import { useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
  const mapRef = useRef(null);

  return (
    <section
      className="cities__map map"
      style={{height: '500px'}}
      ref={mapRef}
    >

    </section>
  );
}

export default Map;

