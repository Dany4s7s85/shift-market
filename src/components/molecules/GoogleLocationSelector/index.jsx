import React, { useEffect, useRef, useState } from 'react';
/* eslint-disable no-unused-vars */
import styled from 'styled-components/macro';
import { Marker } from '@react-google-maps/api';
import storesService from '../../../services/storeService';
import GoogleMap from '../GoogleMap';
import { GeoCode } from '../../../helpers/common';
import Toast from '../Toast';
import PlacesAutoComplete from '../PlacesAutoComplete';
import ModalContainer from '../ModalContainer';
import Field from '../Field';
import Button from '../../atoms/Button';

function GoogleLocationSelector({ onChange = () => {}, zoom, value = {}, getImage = false, ...rest }) {
  const [marker, setMarker] = React.useState({});
  const [markers, setMarkers] = useState();
  const [address, setAddress] = useState({});
  const map = useRef(null);
  useEffect(() => {
    if (value?.place_id) {
      GeoCode({ placeId: value?.place_id })
        .then(res => {
          setMarker(res.latlng);
          setMarkers(
            <Marker
              position={{
                lat: res.latlng.lat,
                lng: res.latlng.lng,
              }}
              key={1}
            />,
          );
          setAddress(res);
          // eslint-disable-next-line no-unused-expressions
          getImage
            ? storesService.getImageFromPlaceId(res.place_id).then(img => {
                if (!img.image) {
                  Toast({
                    type: 'warning',
                    message: 'No Image Found On Google',
                  });
                }
                onChange({ target: { value: { ...res, image: img.image }, name: rest.name } });
              })
            : onChange({ target: { value: { ...res }, name: rest.name } });
        })
        .catch(() => {
          Toast({
            type: 'warning',
            message: 'Please Select A Valid Location',
          });
        });
    }
  }, [value?.place_id]);

  const onLoad = React.useCallback(_ => {
    map.current = _;
  }, []);

  const onUnmount = React.useCallback(() => {
    map.current = null;
  }, []);
  const handleInputChange = React.useCallback(
    _ => {
      setAddress(_.target.value);
      setMarker({ ..._.target.value.latlng });
      setMarkers(
        <Marker
          position={{
            lat: _.target.value.latlng.lat,
            lng: _.target.value.latlng.lng,
          }}
          key={1}
        />,
      );
      map.current.panTo({ ..._.target.value.latlng });
      // eslint-disable-next-line no-unused-expressions
      getImage
        ? storesService.getImageFromPlaceId(_.target.value.place_id).then(img => {
            if (!img.image) {
              Toast({
                type: 'warning',
                message: 'No Image Found On Google',
              });
            }
            onChange({ target: { name: _.target.name, value: { ..._.target.value, image: img.image } } });
          })
        : onChange({ target: { name: _.target.name, value: { ..._.target.value } } });
    },
    [onChange],
  );
  const handleMapClick = React.useCallback(
    ({ placeId }) => {
      if (!placeId) {
        Toast({
          type: 'warning',
          message: 'Please Select A Valid Location',
        });
        return;
      }
      GeoCode({
        placeId,
      })
        .then(res => {
          setMarker(res.latlng);
          setAddress(res);
          setMarkers(
            <Marker
              position={{
                lat: res.latlng.lat,
                lng: res.latlng.lng,
              }}
              key={1}
            />,
          );
          map.current.panTo(res.latlng);
          // eslint-disable-next-line no-unused-expressions
          getImage
            ? storesService.getImageFromPlaceId(res.place_id).then(img => {
                if (!img.image) {
                  Toast({
                    type: 'warning',
                    message: 'No Image Found On Google',
                  });
                }
                onChange({ target: { value: { ...res, image: img.image }, name: rest.name } });
              })
            : onChange({ target: { value: { ...res }, name: rest.name } });
        })
        .catch(() => {
          Toast({
            type: 'warning',
            message: 'Please Select A Valid Location',
          });
        });
    },
    [onChange],
  );

  return (
    <ModalContainer
      lg
      btnComponent={({ onClick }) => (
        <Field
          {...rest}
          onClick={onClick}
          onKeyPress={onClick}
          search={address?.formatted_address}
          value={value?.formatted_address}
        />
      )}
      content={({ onClose }) => (
        <>
          <PlacesAutoComplete search={address?.formatted_address} onChange={handleInputChange} value={value} />
          <GoogleMap
            zoom={zoom}
            // marker={marker}
            markers={markers}
            center={marker.lat ? marker : { lat: 51.0666293, lng: -114.0581756 }}
            onClick={handleMapClick}
            onLoad={onLoad}
            options={{
              componentRestrictions: {
                country: 'ca',
              },
              streetViewControl: false,
              clickableIcons: true,
              restriction: {
                latLngBounds: {
                  north: 83.174035,
                  south: 42.682435,
                  west: -141.152344,
                  east: -52.382813,
                },
                strictBounds: true,
              },
              styles: [
                {
                  featureType: 'poi',
                  elementType: 'labels',
                  stylers: [
                    {
                      visibility: 'on',
                    },
                  ],
                },
                {
                  featureType: 'transit',
                  elementType: 'labels',
                  stylers: [
                    {
                      visibility: 'off',
                    },
                  ],
                },
              ],
            }}
            onUnmount={onUnmount}
            style={{
              width: '100%',
              height: '400px',
            }}
          />
          <Button type="primary" sm width={100} css="margin: 20px 0 0 auto;" disabled={!value} onClick={onClose}>
            Ok
          </Button>
        </>
      )}
    />
  );
}
export default GoogleLocationSelector;
