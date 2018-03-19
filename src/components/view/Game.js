import React, { Component } from 'react';
import {
    View,
    Text,
    Button, StyleSheet,
} from 'react-native';
import AppStyle             from '../../themes/styles';
import AppColor             from '../../themes/colors';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    onClick() {
        if (this.props.navigation && this.props.navigation.goTo) {
            this.props.navigation.goTo('home');
        }
    }

    render() {
        return (
            <View>
                <Text>Game</Text>
                <Button  title="Go Home"
                         color={AppColor.brand.primary}
                         onPress={this.onClick.bind(this)}/>
            </View>
        );
    }
}

const style = StyleSheet.create({
    button: {
        flex: 1,
    }
});
