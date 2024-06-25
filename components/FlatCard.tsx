import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import customStyles from './CustomStyles/customstyles';

export default function FlatCard() {
  const colors = ['Red', 'Green', 'Blue'];
  return (
    <View>
      <Text style={customStyles.headingText}>Flat Cards</Text>
      <View style={{margin: 5}}></View>
      <View style={styles.card}>
        {colors.map((color, index) => (
          <TouchableOpacity
            onPress={() => {
                
              switch (color) {
                case colors[0]:
                  console.log(color, 'R');
                  break;
                case colors[1]:
                  console.log(color, 'G');
                  break;
                case colors[2]:
                  console.log(color, 'B');
                  break;
                default:
                  break;
              }
            }}>
            <View
              key={index}
              style={[styles.square, {backgroundColor: color.toLowerCase()}]}>
              <Text style={styles.textStyle}>Color: {color}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
  },

  square: {
    height: 120,
    width: 120,
    borderRadius: 10.0,
    backgroundColor: 'red',
    margin: 6,
    alignContent: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
