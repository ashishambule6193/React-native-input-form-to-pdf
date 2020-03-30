import * as React from 'react';
import { Text, StyleSheet, View } from "react-native";
import { WebView } from 'react-native-webview'
import * as Permissions from 'expo-permissions';
export default class VideoCall extends React.Component {

    async componentDidMount() {
        await this.checkMultiPermissions()
    }
    async checkMultiPermissions() {

        const { status, expires, permissions } = await Permissions.getAsync(
            Permissions.CAMERA,
            Permissions.AUDIO_RECORDING,

        );
        if (status !== 'granted') {
            alert('Hey! You have not enabled selected permissions');
        }
    }

    render() {
        return (
            < WebView
                source={{ uri: 'https://bots-dev.smartbothub.com/videochat/room/orz376' }}
                style={{ marginTop: 20 }}
                injectedJavaScriptBeforeContentLoaded={this.checkMultiPermissions()}
            />
        );
    }
}