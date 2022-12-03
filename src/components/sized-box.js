import React from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';

export default function SizedBox({height = '100%', width = '100%', style}) {
  return (
    <View
      style={{...styles.defaultStyles, height: height, width: width, ...style}}
    />
  );
}

const styles = StyleSheet.create({
  defaultStyles: {
    height: '100%',
    width: '100%',
  },
});
