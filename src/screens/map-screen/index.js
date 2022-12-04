import React, {useEffect, useRef, useState} from 'react';
import {View, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch, useSelector} from 'react-redux';
import {getDistance} from 'geolib';

import {styles} from './styles';
import COLORS from '../../utils/colors';
import {currentLocation, plus, minus, pin} from '../../assets/image-uri';
import {navigateToScreen} from '../../utils/navigation';
import {setCurrentUser} from '../../state/current-user';
import {uuidGenerator} from '../../utils/utilities';
import {Text} from 'react-native';
import {setRange} from '../../state/filter';
import SizedBox from '../../components/sized-box';
import TouchableImage from '../../components/touchable-image';
import {DELTA_CONSTANTS} from '../../utils/constants';

export default function Map() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);
  const markers = useSelector(state => state.userMarkers.userMarkers);
  const currentUser = useSelector(state => state.currentUser.currentUser);

  const [filteredMarkers, setFilteredMarkers] = useState([]);

  const [region, setRegion] = useState({
    latitude: 28.383449,
    longitude: 77.05216,
    ...DELTA_CONSTANTS,
  });

  const mapRef = useRef(null);

  useEffect(() => {
    setFilteredMarkers(
      markers.filter(item =>
        getDistance(item, currentUser) < filter.range ? item : null,
      ),
    );
  }, [filter, markers, currentUser]);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  function getCurrentLocation() {
    Geolocation.getCurrentPosition(info => {
      dispatch(
        setCurrentUser({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          ...DELTA_CONSTANTS,
          title: 'Me',
          description: 'My Current location',
          id: uuidGenerator(),
        }),
      );

      mapRef.current.animateToRegion(
        {
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          ...DELTA_CONSTANTS,
        },
        1000,
      );
    });
  }

  function handlePinClick() {
    navigateToScreen('bottom-tab', 'chat', {});
  }

  function handleFilter(increment) {
    return function () {
      if (increment) {
        dispatch(setRange(filter.range + 1000));
      } else if (!increment && filter.range > 0) {
        dispatch(setRange(filter.range - 1000));
      }
    };
  }

  return (
    <View style={styles.container}>
      <MapView
        region={region}
        showUserLocation={true}
        followUserLocation={true}
        showsMyLocationButton={true}
        style={styles.mapView}
        ref={mapRef}>
        {filteredMarkers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker}
            title={marker.title}
            description={marker.description}
            onCalloutPress={handlePinClick}>
            <Image
              source={{
                uri: pin,
              }}
              style={styles.markerPin}
            />
          </Marker>
        ))}

        <Marker
          coordinate={currentUser}
          title={currentUser.title}
          description={currentUser.description}>
          <Image
            source={{
              uri: pin,
            }}
            style={{...styles.markerPin, tintColor: COLORS.BLACK}}
          />
        </Marker>
      </MapView>

      <View style={styles.currentLocation}>
        <Text style={styles.range}>{filter.range / 1000}km</Text>
        <SizedBox height={10} />
        <TouchableImage
          onPress={handleFilter(true)}
          uri={plus}
          imageStyle={styles.markerPin}
        />
        <SizedBox height={10} />
        <TouchableImage
          onPress={handleFilter(false)}
          uri={minus}
          imageStyle={styles.markerPin}
        />
        <SizedBox height={10} />
        <TouchableImage
          onPress={getCurrentLocation}
          uri={currentLocation}
          imageStyle={styles.markerPin}
        />
      </View>
    </View>
  );
}
