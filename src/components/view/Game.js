import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    BackHandler,
} from 'react-native';
import AppStyle             from '../../themes/styles';
import AppColor             from '../../themes/colors';
import GameMode             from "../menu/GameMode";
import GameDifficulty       from "../menu/GameDifficulty";
import Spacer               from "../general/Spacer";
import MyLocalization       from "../../my-lib/MyLocalzation";
import Element from "../game/Element";
import SelectElement from "../game/SelectElement";

export default class Game extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            difficulty: props.options && props.options.difficulty ?  props.options.difficulty : 'random',
            mode: props.options && props.options.mode ?  props.options.mode : 'classic',
            player: props.options && props.options.player ?  props.options.player : 'player',
        };
        BackHandler.addEventListener('hardwareBackPress', this.onClickNavigation.bind(this, 'game-options'));
    }

    onClickNavigation(viewName) {
        if (this.props.navigation && this.props.navigation.goTo) {
            this.props.navigation.goTo(viewName);
            return true;
        }
        return false;
    }

    onSelectElement(element) {
        console.warn(element)
    }

    render() {
        return (
            <View>
                <Spacer size={20}/>
                <SelectElement mode={this.state.mode} onSelect={this.onSelectElement.bind(this)}/>
            </View>
        );
    }
}
