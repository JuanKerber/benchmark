import "./marker.css";
import React, { useState, useEffect } from 'react';
import {collection, addDoc, getFirestore} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {app, db} from "../firebaseconfig"

// import * as maptilersdk from '@maptiler/sdk';
// import "@maptiler/sdk/dist/maptiler-sdk.css";

import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#d6a266',
    }
  });


const Marker = () => {

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });

    

    const storage = getStorage(app);

    const [latitude, setlatitude] = useState("");
    const [longitude, setlongitude] = useState("");
    const [desc, setdesc] = useState("");
    const [name, setname] = useState("");
    const [rating, setrating] = React.useState(3);

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
 
    
    //add image to db
    const firestore = getFirestore(app);

    const addMarker = async (e) => {
        e.preventDefault();

        const file = document.getElementById('imageUpload').files[0];
        if (!file) {
            alert("Please select a file.");
            return;
        }

        const storageRef = ref(storage, file.name);

        try {
            // Upload file to Firebase Storage
            await uploadBytes(storageRef, file);
            const fileUrl = await getDownloadURL(storageRef);

            // Store file URL and info in Firestore
            await addDoc(collection(db, 'markers'), {
                latitude:latitude,
                longitude:longitude,
                desc:desc,
                name:name,
                rating:rating,
                url: fileUrl,
            });

            alert("File uploaded successfully!");
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Error uploading file. Please try again.");
        }
    };
    

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
                            id="formName"
                            placeholder="Name"
                            onChange={(e)=>setname(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            id="formDesc"
                            placeholder="Description"
                            onChange={(e)=>setdesc(e.target.value)}
                            required
                        />
                        <StyledRating
                            name="formStars"
                            id="formStars"
                            value={rating}
                            onChange={(e)=>setrating(e.target.value)}
                        />
                        <Button
                        id="formUpload"
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        >
                        Upload an image
                        <VisuallyHiddenInput type="file" id="imageUpload" accept="capture=camera,image/*" required/>
                        </Button>
                    
                        <Button
                            type="submit"
                            id="formSubmit"
                            variant="contained"
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
 
export default Marker