import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const App = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 39.8283459,
    longitude: -98.5794797,
    zoom: 4.5
  });

  return <ReactMapGL {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} onViewportChange={setViewport} />;
};

export default App;
