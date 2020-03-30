import React from 'react';
import { Text, StyleSheet, View } from "react-native";
import { GiftedChat } from 'react-native-gifted-chat';

export default class ChatScreen extends React.Component {

    state = {
        messages: [],
    }

    componentDidMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT',
                    createdAt: new Date(),
                    quickReplies: {
                        type: 'radio', // or 'checkbox',
                        keepIt: true,
                        values: [
                            {
                                title: '😋 Yes',
                                value: 'yes',
                            },
                            {
                                title: '📷 Yes, let me show you with a picture!',
                                value: 'yes_picture',
                            },
                            {
                                title: '😞 Nope. What?',
                                value: 'no',
                            },
                        ],
                    },
                    user: {
                        _id: 2,
                        name: 'React Native',
                    },
                },
                {
                    _id: 2,
                    text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
                    createdAt: new Date(),
                    quickReplies: {
                        type: 'checkbox', // or 'radio',
                        values: [
                            {
                                title: 'Yes',
                                value: 'yes',
                            },
                            {
                                title: 'Yes, let me show you with a picture!',
                                value: 'yes_picture',
                            },
                            {
                                title: 'Nope. What?',
                                value: 'no',
                            },
                        ],
                    },
                    user: {
                        _id: 2,
                        name: 'React Native',
                    },
                }
            ],
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        )
    }
}