import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './map.css';

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const pos = { lng: 139.753, lat: 35.6844 };
    const [zoom] = useState(14);
    maptilersdk.config.apiKey = 'uGrMXdZEwtfsaCiOxVBr';

    

useEffect(() => {
    if (map.current) return; // stops map from intializing more than once
  
    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.OUTDOOR,
      center: [pos.lng, pos.lat],
      zoom: zoom
    });

    const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = "url('/benchmark/assets/bench.svg')";
        el.style.width = '30px';
        el.style.height = '30px';

    new maptilersdk.Marker({ element:el })
  .setLngLat([139.7525,35.6846])
  .addTo(map.current);

  
  }, [pos.lng, pos.lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}