import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {APIBaseUrl} from '../constants';
import {LOAD_BUSINESS_LIST} from '../redux/types/BusinessTypes';

export const useFetchCompanies = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(false);

    fetch(`${APIBaseUrl}/getActiveBusiness`)
      .then((res) => res.json())
      .then((res) => {
        console.log({res});
        dispatch({
          type: LOAD_BUSINESS_LIST,
          payload: res,
        });
        setLoading(true);
      })
      .catch(() => {
        Alert.alert(
          'Error',
          'There was an error fetching the companies. Please check your network connection or try again later.',
          [{text: 'Close'}],
        );

        setLoading(true);
      });
  }, []);

  return loading;
};
