import React from 'react';
import { Text, StyleSheet, View } from "react-native";

const ConponentsScreen = () => {
    const greet = "Hi here!!!!!"
    return <View>
        <Text style={styles.textStyle}> This is screen component </Text>
        <Text>{greet}</Text>
    </View>


};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50 
    }
});

export default ConponentsScreen;