import React from 'react';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FlatCard from './components/FlatCard';
import ElevatedCards from './components/ElevatedCard.tsx';
import FancyCard from './components/FancyCard.tsx';
import customStyles from './components/CustomStyles/customstyles.tsx';
import ContactList from './components/ContactList.tsx';

function App() {
  return (
    <SafeAreaView style={customStyles.mainBody}>
      <ScrollView style={customStyles.mainBody}>
        <FlatCard />
        <ElevatedCards />  
        <FancyCard />
        <ContactList/>
        <View style={{height: 20}}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
