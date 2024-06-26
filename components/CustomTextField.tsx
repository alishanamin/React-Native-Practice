import {StyleSheet, Switch, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import customStyles from './CustomStyles/customstyles';

export default function CustomTextField() {
  const [email, setEmail] = useState('');
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [previousEmail, setPreviousEmail] = useState('');

  const handleSwitchToggle = () => {
    if (isSwitchOn) {
      setEmail(previousEmail);
    } else {
      setPreviousEmail(email);
      setEmail('MUMTA');
    }
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <View>
      <View style={{height: 20}}></View>
      <Text style={customStyles.headingText}>CustomTextField</Text>
      <View style={{height: 20}}></View>

      <TextInput
        placeholder="Email"
        onChangeText={value => {
          if (!isSwitchOn) {
            setEmail(value);
          }
          console.log(value);
        }}
        value={email}
        style={styles.textInput}
      />
      <View style={{height: 20}}></View>
      <Text style={customStyles.textStyle1}>{email}</Text>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={customStyles.headingText}>Change User Email</Text>
        <Switch value={isSwitchOn} onValueChange={handleSwitchToggle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    padding: 20.0,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10.0,
  },
});
