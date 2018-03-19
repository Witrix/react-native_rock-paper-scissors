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


    render() {
        return (
            <View>
                <Spacer size={20}/>
                <Text style={AppStyle.h1}>{MyLocalization.getString('appName')}</Text>
                <Text>{MyLocalization.getString('difficulty')}: {this.state.difficulty}</Text>
                <Text>{MyLocalization.getString('gameMode')}: {this.state.mode}</Text>
                <Text>{MyLocalization.getString('playerMode')}: {this.state.player}</Text>
                <Element type="rock"/>
                <Element type="paper"/>
                <Element type="scissors"/>
                <Element type="lizard"/>
                <Element type="spock"/>
            </View>
        );
    }
}
