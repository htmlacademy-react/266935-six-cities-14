import { useRef } from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';

import { City } from '../../types/offer';

import useMap from '../../hooks/use-map';

type MapProps = {
    city: City;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

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

