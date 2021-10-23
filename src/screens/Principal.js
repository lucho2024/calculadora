import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';

import Operations from '../components/Operations';

const Principal = () => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>Escoje tu operacion por favor</Text>

      <Operations operacion="+" />
      <Operations operacion="-" />
      <Operations operacion="/" />
      <Operations operacion="*" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
export default Principal;
