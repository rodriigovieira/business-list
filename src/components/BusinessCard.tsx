import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const ScreenWidth: number = Dimensions.get('screen').width;

type BusinessModel = {
  city: string;
  street_address: string;
  primary_naics_description: string;
  business_name: string;
};

type BusinessCardProps = {
  business: BusinessModel;
};

const styles = StyleSheet.create({
  businessCard: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    width: ScreenWidth * 0.9,

    //Elevation effect
    shadowColor: '#525252',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },

  labelContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  label: {
    fontSize: 16,
  },

  boldLabel: {
    fontWeight: '700',
    marginRight: 10,
  },
});

const BusinessCard = ({business}: BusinessCardProps) => {
  return (
    <View style={styles.businessCard}>
      <View style={styles.labelContainer}>
        <Text style={[styles.label, styles.boldLabel]}>Name</Text>
        <Text style={styles.label}>{business.business_name}</Text>
      </View>

      <View style={styles.labelContainer}>
        <Text style={[styles.label, styles.boldLabel]}>City</Text>
        <Text style={styles.label}>{business.city}</Text>
      </View>

      <View style={styles.labelContainer}>
        <Text style={[styles.label, styles.boldLabel]}>Address</Text>
        <Text style={styles.label}>{business.street_address}</Text>
      </View>

      <View style={styles.labelContainer}>
        <Text style={[styles.label, styles.boldLabel]}>Description</Text>
        <Text style={styles.label}>{business.primary_naics_description}</Text>
      </View>
    </View>
  );
};

export default BusinessCard;
