import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const ColorCounter = ({ color }) => {

    return (
        <View>
            <Text>
                {color}
            </Text>
            <Button title={`Inc ${color}`} />
            <Button title={`Dec ${color}`} />

        </View>
    )
};

const styles = StyleSheet.create({

});
export default ColorCounter;