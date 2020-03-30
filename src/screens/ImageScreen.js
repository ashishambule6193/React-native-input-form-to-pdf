import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail ImageTitle="Forest" ImageFileSource={require('../../assets/forest.jpg')} ImageScore={9} />
            <ImageDetail ImageTitle="Beach" ImageFileSource={require('../../assets/beach.jpg')} ImageScore={7} />
            <ImageDetail ImageTitle="Mountain" ImageFileSource={require('../../assets/mountain.jpg')} ImageScore={10} />


        </View>
    )
};
export default ImageScreen;