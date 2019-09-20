import React, { useState, useContext } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import { BizListContext } from './contexts/BizListContext';

const API_KEY = process.env.REACT_APP_GOOGLEMAPS_API_KEY;

export function MapContainer(props) {
  const { lat, long } = props;
  const { biz } = useContext(BizListContext);

  const [showingInfoWindow, setInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});

  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setInfoWindow(true);
  };

  const onMapClicked = props => {
    if (showingInfoWindow) {
      setActiveMarker(null);
      setInfoWindow(false);
    }
  };

  const renderMarkers = () => {
    return biz.map((x, i) => (
      <Marker
        onClick={onMarkerClick}
        name={`${i + 1}. ${x.name}`}
        label={`${i + 1}`}
        position={{
          lat: x.coordinates.latitude,
          lng: x.coordinates.longitude
        }}
        key={i}
      />
    ));
  };

  return (
    <Map
      onClick={onMapClicked}
      style={styles.map}
      google={props.google}
      zoom={14}
      center={{ lat: lat, lng: long }}
    >
      <Marker
        onClick={onMarkerClick}
        name={'Current Location'}
        position={{ lat: lat, lng: long }}
      />
      <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
        <h1>{selectedPlace.name}</h1>
      </InfoWindow>
      {renderMarkers()}
    </Map>
  );
}

const styles = {
  map: {
    height: '50%',
    width: '50%',
    position: 'relative',
    marginLeft: '5em',
    marginTop: '10em'
  }
};

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);
