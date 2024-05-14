import React, { useRef, useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './map.css';
import GeoJSON from 'geojson'
import {db} from "../firebaseconfig"
import { collection, getDocs } from "firebase/firestore";

export default function Map() {
// 6.115015,46.224919

    //map init
    const mapContainer = useRef(null);
    const map = useRef(null);
    maptilersdk.config.apiKey = 'uGrMXdZEwtfsaCiOxVBr';

    var markers = [];


    async function fetchData(){
      const querySnapshot = await getDocs(collection(db, "markers"));
      querySnapshot.forEach((doc) => {
        markers.push(doc.data())
      })
      parseData(markers);
    } 

    function parseData(data){
      var JSON= GeoJSON.parse(data, {Point: ['latitude', 'longitude']});
      displayMarkers(JSON);
      console.log(JSON);
    }


    function displayMarkers(geojson){
            // add markers to map
          geojson.features.forEach(function (marker) {
            // create a DOM element for the marker
            var el = document.createElement('div');
            el.className = 'marker';
            el.style.backgroundImage =
                `url(/benchmark/assets/bench_89078.png)`;
            el.style.width = '30px';
            el.style.height = '30px';

            const description = '<strong>'+ marker.properties.name +'</strong><p>' + marker.properties.desc + '<p>'

            var popup = new maptilersdk.Popup({ offset: 25 }).setHTML(description);

            // add marker to map
            new maptilersdk.Marker({element: el})
                .setLngLat(marker.geometry.coordinates)
                .setPopup(popup)
                .addTo(map.current);
          });
        }

useEffect( () => {

  fetchData();

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
