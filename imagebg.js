
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

// create a component
const ImageBack = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require("")}></ImageBackground>
       
        </View>
    );
};





// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MyComponent;
