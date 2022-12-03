import React, {createRef} from 'react';
import {StackActions} from '@react-navigation/routers';

export const navigatorRef = createRef();

export function navigateToScreen(stack, screen, params) {
  navigatorRef?.current?.navigate(stack, {screen, params});
}

export function navigateReplaceToScreen(stack, screen, params) {
  navigatorRef.current.dispatch(StackActions.replace(stack, {screen, params}));
}
