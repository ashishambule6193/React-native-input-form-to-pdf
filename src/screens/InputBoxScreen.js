import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Image,
    PermissionsAndroid,
    Platform,
} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
export default class InputBoxScreen extends Component {
    state = {
        filePath: ''
    };
    constructor(props) {
        super(props);
    }

    askPermission() {
        var that = this;
        const requestCameraPermission = async () => {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: "Cool Photo App Camera Permission",
                        message:
                            "Cool Photo App needs access to your camera " +
                            "so you can take awesome pictures.",
                        buttonNeutral: "Ask Me Later",
                        buttonNegative: "Cancel",
                        buttonPositive: "OK"
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log("You can use the camera");
                } else {
                    console.log("Camera permission denied");
                }
            } catch (err) {
                console.warn(err);
            }
        };
        //Calling the External Write permission function
        if (Platform.OS === 'android') {
            requestCameraPermission();
        }
        else if (Platform.OS === 'ios') {
            requestExternalWritePermission()
        } else {
            this.createPDF();
        }
    }

    async createPDF() {
        let options = {
            //Content to print
            html:
                '<h1 style="text-align: center;"><strong>Hello Guys</strong></h1><p style="text-align: center;">Here is an example of pdf Print in React Native</p><p style="text-align: center;"><strong>Team About React</strong></p>',
            //File Name
            fileName: 'test',
            //File directory
            directory: 'docs',
        };

        let file = await RNHTMLtoPDF.convert(options);
        console.log(file.filePath);
        this.setState({ filePath: file.filePath });
    }
    render() {
        return (
            <View style={styles.MainContainer}>
                <TouchableOpacity onPress={this.askPermission.bind(this)}>
                    <View>
                        <Image
                            //We are showing the Image from online
                            source={{
                                uri:
                                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/pdf.png',
                            }}
                            //You can also show the image from you project directory like below
                            //source={require('./Images/facebook.png')}
                            style={styles.ImageStyle}
                        />
                        <Text style={styles.text}>Create PDF</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.text}>{this.state.filePath}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2F4F4F',
        borderWidth: 1,
        borderColor: '#000',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        marginTop: 16,
    },
    ImageStyle: {
        height: 150,
        width: 150,
        resizeMode: 'stretch',
    },
});