import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import customStyles from './CustomStyles/customstyles';

export default function ColorChange() {
  const [randomColor, setRandomColorChange] = useState({
    square: '#FF4191',
    circle: '#FFF078',
    rectangle: '#E90074',
  });

  function colorChangeRandomly() {
    const hexRange = '0123456789ABCDEF';
    let colorHash = '#';

    for (let index = 0; index < 6; index++) {
      colorHash += hexRange[Math.floor(Math.random() * 16)];
    }
    return colorHash;
  }

  function generateShapeColors() {
    setRandomColorChange({
      square: colorChangeRandomly(),
      rectangle: colorChangeRandomly(),
      circle: colorChangeRandomly(),
    });
  }

  return (
    <View>
      <View style={{height: 20}}></View>
      <Text style={customStyles.headingText}>ColorChange</Text>

      <View
        style={[customStyles.square, {backgroundColor: randomColor.square}]}>
        <Text style={customStyles.circleTextStyle}>SQUARE</Text>
      </View>
      <View
        style={[
          customStyles.rectangle,
          {backgroundColor: randomColor.rectangle},
        ]}>
        <Text style={customStyles.circleTextStyle}>Rectangle</Text>
      </View>
      <View
        style={[
          customStyles.circle,
          ,
          {backgroundColor: randomColor.circle},
        ]}></View>

      <View style={{height:60,width:'100%',borderRadius:20.0,backgroundColor:randomColor.circle,justifyContent:'center',alignContent:'center'}}>
      <Button  color={'white'} title="Press me for color change" onPress={generateShapeColors}>
        
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
