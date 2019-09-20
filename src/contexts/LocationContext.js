import React, { createContext, useState, useEffect } from 'react';

export const LocationContext = createContext();

const initialVal = { lat: 80.836319, long: -118.340042 };

const options = {
  enableHighAccuracy: false,
  maximumAge: 1000,
  timeout: 1000
};

//Custom Hook to find Location
export function LocationProvider(props) {
  const [position, setPosition] = useState(initialVal);

  function getCoordinates() {
    return navigator.geolocation.getCurrentPosition(x => {
      let location = x.coords;
      console.log(location);
      setPosition({
        lat: location.latitude,
        long: location.longitude
      });
    });
  }

  async function getPosition() {
    // console.log(position);
    const newPos = await getCoordinates();
    return newPos;
  }

  return (
    <LocationContext.Provider value={{ position, getPosition }}>
      {props.children}
    </LocationContext.Provider>
  );
}
