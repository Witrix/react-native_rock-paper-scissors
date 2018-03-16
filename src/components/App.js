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
import MainStyle          from '../themes/styles';
import MyLocalization     from "../my-lib/MyLocalzation";
import Spacer             from "./general/Spacer";

type Props = {};
export default class App extends Component<Props> {
    render() {
        let locale = MyLocalization.getLocale();
        return (
            <View style={MainStyle.centerView}>
                <Text style={MainStyle.h1}>
                    {MyLocalization.getString("appName")}
                </Text>
                <Text style={MainStyle.text}>App in construction</Text>
                <Spacer size={20}/>
                <Text style={MainStyle.text}>Locale: {locale}</Text>
                <Spacer size={20}/>
                <Image source={require('../resources/images/elements/spock.png')}/>
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
