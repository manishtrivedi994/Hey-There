import {StyleSheet} from 'react-native';
import COLORS from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  markerPin: {height: 35, width: 35},
  mapView: {width: '100%', height: '100%'},
  currentLocation: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  filterContainer: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  range: {
    fontSize: 24,
  },
});
