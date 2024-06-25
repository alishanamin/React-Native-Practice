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

function App() {
  return (
    <SafeAreaView style={customStyles.mainBody}>
      <ScrollView style={customStyles.mainBody}>
        <FlatCard />
        <ElevatedCards />
        <ElevatedCards />
        <FancyCard />
        <FancyCard />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
