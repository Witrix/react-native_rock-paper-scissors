import React, { Component } from 'react';
import {
    View,
    Text,
    Button, StyleSheet,
} from 'react-native';
import AppStyle             from '../../themes/styles';
import AppColor             from '../../themes/colors';
import GameMode from "../menu/GameMode";

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    onSelectMode(mode) {
        console.warn(mode);
    }

    render() {
        return (
            <View>
               <GameMode onSelect={this.onSelectMode.bind(this)}/>
            </View>
        );
    }
}

const style = StyleSheet.create({
    button: {
        flex: 1,
    }
});
