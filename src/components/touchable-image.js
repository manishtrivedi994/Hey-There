import React from 'react';
import {TouchableWithoutFeedback, Image} from 'react-native';

export default function TouchableImage({
  onPress = () => {},
  uri = '',
  imageStyle = {},
  containerStyle = {},
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={containerStyle}>
      <Image source={{uri: uri}} style={imageStyle} />
    </TouchableWithoutFeedback>
  );
}
