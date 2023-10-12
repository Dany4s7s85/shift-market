/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { GoogleMap as Map, useJsApiLoader } from '@react-google-maps/api';

function GoogleMap({ style, onLoad, onUnmount, zoom, markers, ...rest }) {
  const ref = useRef(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  return isLoaded ? (
    <Map {...rest} ref={ref} mapContainerStyle={style} zoom={zoom} onLoad={onLoad} onUnmount={onUnmount}>
      {markers}
    </Map>
  ) : (
    'Loading Map ...'
  );
}

export default GoogleMap;
