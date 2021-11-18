import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import MapView from 'react-native-maps';

export default function MapScreen() {
  
  return (
    <View style={styles.container}>
 
      <MapView 
        style={styles.map}
        provider={null}
        initialRegion={{
          latitude: 33.9517249,
          longitude: -83.3786963,
          latitudeDelta: 0,
          longitudeDelta: 0,
        }
        }
        showsPointsOfInterest={false}
        showsBuildings={true}
        showsUserLocation={true}
        userLocationAnnotationTitle='Your Location'
        followsUserLocation={false}
        showsCompass={false}
        showsMyLocationButton={true}
        zoomEnabled={true}
        minZoomLevel={15}
        maxZoomLevel={19}


         />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
