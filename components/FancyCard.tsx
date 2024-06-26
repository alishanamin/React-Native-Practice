import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import customStyles from './CustomStyles/customstyles';

export default function FancyCard() {
  return (
    <View style={styles.wrapper}>
      <Text style={customStyles.headingText}>FancyCard</Text>
      <View style={{ height: 20 }}></View>
      <View style={[styles.card, styles.container]}>
        <Image
          source={{
            uri: 'https://imageio.forbes.com/specials-images/imageserve/675172642/pura-ulun-danu-bratan-temple-in-Bali-/960x0.jpg?format=jpg&width=960',
          }}
          style={customStyles.mainImageStyle}
        />
        <View style={{ height: 5 }}></View>
        <Text style={customStyles.fancyCardHeadingStyle}>Bali Indonesia</Text>
        <Text style={customStyles.fancyCardLabelStyle}>12-June-2024</Text>
        <Text style={customStyles.fancyCardDesStyle}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          iusto neque? Sapiente, eaque, dolorum, atque ipsa doloribus impedit
          soluta explicabo numquam tempore eos magni expedita nihil sit iste
          voluptate obcaecati?
        </Text>
        <Text style={customStyles.fancyCardTimeTextStyle}>23 mins ago</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop:10,
    paddingBottom:10,
    
  },
  container: {
    flex: 1,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 2, 
    padding:10
  },
  card: {
    width: '100%',
    borderRadius: 20.0,
    backgroundColor: 'white', 
   
  },
});
