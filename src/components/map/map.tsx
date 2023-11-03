import { useRef, useEffect } from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';

import { City, Offer } from '../../types/offer';

import useMap from '../../hooks/use-map';

type MapProps = {
    city: City;
    offers: Offer[];
    selectedOfferCardId: Offer['id'] | null;
    mapType: 'cities' | 'offer';
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

function Map({city, offers, selectedOfferCardId, mapType} : MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedOfferCardId !== undefined && offer.id === selectedOfferCardId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);

      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  },[map, offers, selectedOfferCardId]);

  return (
    <section
      className={`${mapType}__map map`}
      ref={mapRef}
    >

    </section>
  );
}

export default Map;

