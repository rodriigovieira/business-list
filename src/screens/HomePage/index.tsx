import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import BusinessCard from '../../components/BusinessCard';
import {useFetchCompanies} from '../../hooks/UseFetchCompanies';
import {typedUseSelector} from '../../redux';
import {LOAD_BUSINESS_LIST} from '../../redux/types/BusinessTypes';
import {styles} from './styles';
import RNLocation, {Location} from 'react-native-location';
import {getDistance} from 'geolib';

const HomePage = () => {
  const {business} = typedUseSelector((state) => state.business);
  const loading = useFetchCompanies();

  const dispatch = useDispatch();

  /**
   * Sort companies showing closest first
   */
  const showClosestFirst = async () => {
    const hasAuthorization: boolean = await RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
      },
    });

    if (hasAuthorization) {
      const location: Location | null = await RNLocation.getLatestLocation({
        timeout: 5000,
      });

      if (!location) return;

      const sortedCompanies: Array<any> = business.sort((a, b) => {
        if (a.location_1 && !b.location_1) return -1;
        if (!a.location_1 && b.location_1) return 0;
        if (!a.location_1 && !b.location_1) return 0;

        const distanceFromA: number = getDistance(location, {
          lat: a.location_1.latitude,
          lng: a.location_1.longitude,
        });
        const distanceFromB: number = getDistance(location, {
          lat: b.location_1.latitude,
          lng: b.location_1.longitude,
        });

        return distanceFromA < distanceFromB ? -1 : 1;
      });

      dispatch({
        type: LOAD_BUSINESS_LIST,
        payload: sortedCompanies,
      });
    }
  };

  /**
   * Sort companies showing oldest first
   */
  const showOldestFirst = () => {
    const sortedCompanies: Array<any> = business.sort((a, b) => {
      const firstBusinessDate = new Date(a.location_start_date);
      const secondBusinessDate = new Date(b.location_start_date);

      const isFirstOlderThanSeconds: boolean =
        firstBusinessDate.getTime() > secondBusinessDate.getTime();

      return isFirstOlderThanSeconds ? 1 : -1;
    });

    dispatch({
      type: LOAD_BUSINESS_LIST,
      payload: sortedCompanies,
    });
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Here you can find some business located at LA.
        </Text>

        <TouchableOpacity onPress={showOldestFirst} style={styles.button}>
          <Text style={styles.buttonText}>Show oldest business first</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={showClosestFirst} style={styles.button}>
          <Text style={styles.buttonText}>Show closest business first</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        refreshing={loading}
        keyExtractor={(item) => item.location_account}
        renderItem={({item}) => {
          return <BusinessCard business={item} />;
        }}
        data={business}
      />
    </SafeAreaView>
  );
};

export default HomePage;
