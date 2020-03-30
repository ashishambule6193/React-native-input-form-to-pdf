import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen!!!!</Text>
      <Button
        onPress={() => navigation.navigate('Chat')}
        title="Go to chat Screen"

      />

      <Button
        onPress={() => navigation.navigate('Video')}
        title="Go to Video Screen"

      />

<Button
        onPress={() => navigation.navigate('Input')}
        title="Go to Input Boxes Screen"

      />
      {/* <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to ComponentScreen"

      /> */}

      {/* <Button
        color={'red'}
        onPress={() => navigation.navigate('List')}
        title="Go to ListScreen"

      />
      <Button
        color={'green'}
        onPress={() => navigation.navigate('Image')}
        title="Go to ImageScreen"

      />

      <Button
        color={'yellow'}
        onPress={() => navigation.navigate('Count')}
        title="Go to CountScreen"

      />

      <Button
        color={'blue'}
        onPress={() => navigation.navigate('Color')}
        title="Go to ColorScreen"

      />

      <Button
        color={'black'}
        onPress={() => navigation.navigate('Square')}
        title="Go to SquareScreen"

      /> */}
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>
          Go to List Demo
        </Text>
      </TouchableOpacity> */}
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  }
});

export default HomeScreen;