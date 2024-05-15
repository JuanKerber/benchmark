import "./marker.css";
import React, { useState, useEffect, useRef } from 'react';
import {collection, addDoc} from "firebase/firestore";
import {db} from "../firebaseconfig"

import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";

import Button from '@mui/material/Button';
 
const Marker = () => {

    const [latitude, setlatitude] = useState("");
    const [longitude, setlongitude] = useState("");
    const [desc, setdesc] = useState("");
    const [name, setname] = useState("");

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

    function success(pos) {
        var crd = pos.coords;
        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        setlatitude(crd.latitude);
        setlongitude(crd.longitude);
      }
    
      function errors(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
 
    const addMarker = async (e) => {
        e.preventDefault();  
       
        try {
            const docRef = await addDoc(collection(db, "markers"), {
              latitude:latitude,
              longitude:longitude,
              desc:desc,
              name:name
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          document.getElementById('myForm').reset();
    }
 
    //  //map init
    //  const mapContainer = useRef(null);
    //  const map = useRef(null);
    //  maptilersdk.config.apiKey = 'uGrMXdZEwtfsaCiOxVBr';
   
    useEffect(()=>{

        if (navigator.geolocation) {
            navigator.permissions
            .query({ name: "geolocation" })
            .then(function (result) {
                console.log(result);
                if (result.state === "granted") {
                    navigator.geolocation.getCurrentPosition(success, errors, options);
                } else if (result.state === "prompt") {
                    navigator.geolocation.getCurrentPosition(success, errors, options);
                } else if (result.state === "denied") {
                    alert("Please enable GPS location")
                }
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }

        // if (map.current) return; // stops map from intializing more than once
  
        //     map.current = new maptilersdk.Map({
        //     container: mapContainer.current,
        //     style: maptilersdk.MapStyle.OUTDOOR,
        //     geolocate: maptilersdk.GeolocationType.POINT
        //     });

    })
 
 
    return (
        <section className="marker-container">
            <div className="marker">
                <h1 className="header">
                    Add a marker
                </h1>
                
                <div>
                <form id="myForm">
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            onChange={(e)=>setname(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            onChange={(e)=>setdesc(e.target.value)}
                        />
                    </div>
                    </form>
                    <div className="btn-container">
                        <Button
                            type="submit"
                            variant="contained"
                            onClick={addMarker}
                        >
                            Submit
                        </Button>
                    </div>
                    {/* <div className="map-wrap">
                        <div ref={mapContainer} className="map" />
                    </div> */}
                </div>
            </div>
        </section>
    )
}
 
export default Marker