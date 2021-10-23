import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';

const Result = ({route}) => {
  const operacion = route.params.data;
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  useEffect(() => {
    console.log(operacion);
    let n1 = parseInt(num1);
    let n2 = parseInt(num2);
    operacion === '+' ? setResultado(n1 + n2) : null;
    operacion === '-' ? setResultado(n1 - n2) : null;
    operacion === '/' ? setResultado(n1 / n2) : null;
    operacion === '*' ? setResultado(n1 * n2) : null;
  }, [num1, num2, operacion]);
  return (
    <View>
      <View>
        <Text>Ingrese el primer valor</Text>
        <TextInput
          style={{}}
          keyboardType="numeric"
          placeholder="Numero 1"
          placeholderTextColor="black"
          onChangeText={value => setNum1(value)}
        />
      </View>
      <View>
        <Text>Ingrese el Segundo valor</Text>
        <TextInput
          style={{}}
          keyboardType="numeric"
          placeholder="Numero 2"
          placeholderTextColor="black"
          onChangeText={value => setNum2(value)}
        />
      </View>
      <View>
        <Text>
          El Resultado de {num1} {operacion} {num2}
        </Text>
        <Text>Resultado : {resultado}</Text>
      </View>
    </View>
  );
};

export default Result;
