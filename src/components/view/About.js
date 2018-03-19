import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image, BackHandler
} from 'react-native';
import AppStyle             from '../../themes/styles';
import MyLocalization       from "../../my-lib/MyLocalzation";
import Spacer               from "../general/Spacer";
import AppColor             from "../../themes/colors";

export default class About extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <View style={AppStyle.centerVertical}>
                <Text style={AppStyle.h1}>{MyLocalization.getString('about')}</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    button: {
        margin: 10
    },
    image: {
        width: 70,
        height: 70,
        margin: 5,
    },
    containerImage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
