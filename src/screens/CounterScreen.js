import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

//function based component
const countScreen = () => {
    const [counter, setCounter] = useState(0); // initial value of counter which you set as of now its 0
    return (
        <View>

            <Button
                title="Inc" onPress={() => {
                    //counter++;  // never going to modify state variable directly we have to update state variable
                    setCounter(counter+1);
                }} />
            <Button
                title="Dec" onPress={() => {
                    // counter--;
                    setCounter(counter-1);

                }} />

            <Text>
                Count : {counter}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({

})
export default countScreen;
