/**
 * Function that returns an array sortered
 * by the proximity between the user and the company.
 */
import {getDistance} from 'geolib';
import RNLocation, {Location} from 'react-native-location';

export const sortBusinessByProximity = async (
  business: Array<any>,
): Promise<Array<any>> => {
  const location: Location | null = await RNLocation.getLatestLocation({
    timeout: 5000,
  });

  if (!location) return [];

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

  return sortedCompanies;
};
