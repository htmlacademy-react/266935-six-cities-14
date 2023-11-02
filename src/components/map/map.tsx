import { useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { City } from '../../types/offer';

import useMap from '../../hooks/use-map';

type MapProps = {
    city: City;
};

function Map({city} : MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

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

