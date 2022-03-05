
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; //remove !
import {Map, Marker} from "react-map-gl"; 
 
mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhaWFsaTciLCJhIjoiY2wwYml2OGJpMHhtcDNjbnR4bDNndDJkeSJ9.gOAKZTDvJzyQiMmH2UA_vQ';
 
export default function SuperfundMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom
    });
    });
  
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
      map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
      });
  });
 
  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <Map
      latitude= {lng}
      longitude= {lat}
      zoom= {zoom}
      style = {{width: 500, height: 400}}>
      </Map>
    </div>
    );
}