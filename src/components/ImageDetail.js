import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {

    return (
        <View>
            <Image source={props.ImageFileSource} />
            <Text>
                {props.ImageTitle}
            </Text>
            <Text>
                Image score-  {props.ImageScore}
            </Text>
        </View>

    )
};
export default ImageDetail;