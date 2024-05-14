import React, { useRef, useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";

export default function Map() {
// 6.115015,46.224919

    //map init
    const mapContainer = useRef(null);
    const map = useRef(null);
    maptilersdk.config.apiKey = 'uGrMXdZEwtfsaCiOxVBr';


useEffect( () => {


    if (map.current) return; // stops map from intializing more than once
  
    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.OUTDOOR,
      geolocate: maptilersdk.GeolocationType.POINT
    });

    
  
  });

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
