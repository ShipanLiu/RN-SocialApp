import {useState, useEffect} from 'react';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';

export default function usePermission() {
  const [result, setResult] = useState();

  const requestPermission = async () => {
    // request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    //   .then(result => {
    //     setResult(result)
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    try {
      const response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      setResult(response);
    } catch (error) {
      console.log('usePermission Error: ' + error);
    }
  };

  // 一上来就请求：
  useEffect(() => {
    requestPermission();
  }, []);

  return result;
}
