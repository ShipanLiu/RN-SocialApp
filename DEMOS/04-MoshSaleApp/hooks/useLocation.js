/*
  customized hooks
*/
import {useState, useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';

export default function useLocation() {
  const [myLocation, setMyLocation] = useState();

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => {
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
      },
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return myLocation;
}
