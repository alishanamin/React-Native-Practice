import {
  Image,
  ImageBackground,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import customStyles from './CustomStyles/customstyles';

export default function ElevatedCards() {
  const loadUri = () => {
    const url = 'https://www.google.com'; // Properly formatted URL with https://
    Linking.openURL(url).catch(err =>
      console.error('Failed to open page:', err),
    );
  };

  const images = [
    'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719187200&semt=ais_user',
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8AAxAr9ZNr9JCwn2QZ35rSWWuiayhh0ayQ&s',
    'https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg',
  ];
  return (
    <View>
      <View style={{height: 20}}></View>
      <Text style={customStyles.headingText}>ElevatedCards</Text>

      <ScrollView horizontal={true} style={styles.container}>
        {[...Array(images.length).keys()].map(index => (
          <TouchableOpacity onPress={() => loadUri()}>
            <View key={index} style={styles.card}>
              <Image
                style={customStyles.imageStyle}
                source={{
                  uri: images[index],
                }}></Image>
              <Text style={customStyles.textStyle}>
                Elevated Card 0{index + 1}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
  },
  card: {
    height: 150,
    width: 150,
    borderRadius: 20.0,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 5,
    resizeMode: 'cover',
  },
  cardElevated: {},
});
