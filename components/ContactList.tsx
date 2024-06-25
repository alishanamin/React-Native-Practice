import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import customStyles from './CustomStyles/customstyles';

export default function ContactList() {
  const contactList = [
    {
      uid: 1,
      name: 'Alishan M Amin',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image:
        'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=',
    },
    {
      uid: 2,
      name: 'ALI RAZA ',
      desc: 'Lorem Ipsum ',
      image: 'https://i.ytimg.com/vi/050kHpGZqmI/sddefault.jpg',
    },
    {
      uid: 3,
      name: 'Mumta ALISHAN',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ullam exercitationem, porro temporibus unde alias voluptatum, aliquid accusantium quasi expedita consequatur magnam iure fuga molestiae, possimus culpa magni tempore eos!',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZMVQ0lWc7_esjyeRcykzgdUSj3xDB2-9JxQ&s',
    },
  ];
  return (
    <View>
      <View style={{height: 20}}></View>
      <Text style={customStyles.headingText}>Contact List</Text>
      <View style={{height: 10}}></View>
      <ScrollView scrollEnabled={false}>
        {contactList.map((contact, index) => (
          <View key={contact.uid} style={styles.container}>
            <View style={[customStyles.circle, styles.imageContainer]}>
              <Image
                style={{height: 60, width: 60, borderRadius: 25}}
                source={{
                  uri: contact.image,
                }}></Image>
            </View>
            <View style={styles.card}>
              <Text style={customStyles.headingText}>{contact.name}</Text>
              <Text style={customStyles.contactListTextStyle} numberOfLines={3}>
                {contact.desc}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#55AD9B',

    borderRadius: 15.0,
    margin: 5,
    alignItems: 'center',
    padding: 5,
  },
  imageContainer: {
    marginRight: 10,
    alignSelf: 'flex-start', // Align the image container to the top
  },
  card: {
    flex: 1,
    padding: 5,
  },
});
