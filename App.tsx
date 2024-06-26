import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import FlatCard from './components/FlatCard';
import ElevatedCards from './components/ElevatedCard.tsx';
import FancyCard from './components/FancyCard.tsx';
import customStyles from './components/CustomStyles/customstyles.tsx';
import ContactList from './components/ContactList.tsx';
import CustomTextField from './components/CustomTextField.tsx';

function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <SafeAreaView style={customStyles.mainBody}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <FlatCard />
              <ElevatedCards />
              <FancyCard />
              <ContactList />
              <CustomTextField />
              <View style={{height: 20}}></View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 10,
    marginBottom:10 // Added padding to ensure content is visible above the keyboard
  },
});
