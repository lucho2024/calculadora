import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Operations = ({operacion}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Result', {data: operacion})}>
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>{operacion}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Operations;
