/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import MainStyle from './themes/styles';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={MainStyle.centerView}>
                <Text style={MainStyle.h1}>
                    Rock Paper Scissors
                </Text>
                <Text style={MainStyle.text}>Application in construction</Text>
                <Image source={require('./resources/images/elements/rock.png')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
