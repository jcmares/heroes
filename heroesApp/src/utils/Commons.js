import React from 'react';
import {Alert} from 'react-native';


export const showMessage = (title, message, btnText, callback) => {
  Alert.alert(
    title,
    message,
    [{text: btnText, onPress: callback}],
    {cancelable: false},
  );
};
