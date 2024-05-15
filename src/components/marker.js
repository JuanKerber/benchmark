import "./marker.css";
import React, { useState, useEffect } from 'react';
import {collection, addDoc} from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import {db} from "../firebaseconfig"

// import * as maptilersdk from '@maptiler/sdk';
// import "@maptiler/sdk/dist/maptiler-sdk.css";

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
        setlatitude(crd.latitude);
        setlongitude(crd.longitude);
      }
    
      function errors(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
 
    const addMarker = async (e) => {
        e.preventDefault();  
       if (name !== "" && desc !== ""){
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
        } else {
            console.error("Form is empty");
        }
    }
    //add image
    const addimagetocloud = async (e) => {
        e.preventDefault(); 
        const storage = getStorage();
        console.log(HTMLInputElement.files);
        const mountainsRef = ref(storage, 'mountains.jpg');
      }
    

    useEffect(()=>{

        if (navigator.geolocation) {
            navigator.permissions
            .query({ name: "geolocation" })
            .then(function (result) {
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

    })
 
 
    return (
        <section className="marker-container">
            <div className="marker">
                <h1 className="header">
                    Add a bench marker.
                </h1>
                
                <div>
                <form id="myForm" onSubmit={addMarker}>
                        <input
                            type="text"
                            placeholder="Name"
                            onChange={(e)=>setname(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            onChange={(e)=>setdesc(e.target.value)}
                            required
                        />
                        {/* <label>Select an image:</label>
                        <input
                            type="file"
                            accept="image/*"
                            capture="camera"
                            required
                        /> */}
                    
                        <Button
                            type="submit"
                            variant="contained"
                        >
                            Submit
                        </Button>
                    </form>
                    {/* <form onSubmit={addimagetocloud}>
                    <input
                            type="file"
                            accept="image/*"
                            capture="camera"
                            required
                        />
                    <Button
                            type="submit"
                            variant="contained"
                        >
                            Add image
                        </Button>
                    </form> */}
                </div>
            </div>
        </section>
    )
}
 
export default Marker