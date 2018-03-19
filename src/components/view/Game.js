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
import MyRules from "../../my-lib/MyRules";
import GameResult from "../game/GameResult";
import MenuEndGame from "../menu/MenuEndGame";

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
        let result = MyRules.playGame(element, this.state.mode, this.state.player);
        console.warn(result);
        this.setState({result: result});
    }

    onPlayAgain() {
        this.setState({result: null})
    }

    onChangeOptions() {
        this.onClickNavigation('game-options');
    }

    onHome() {
        this.onClickNavigation('home');
    }

    renderContent() {
        if (this.state.result) {
            return (
                <View>
                    <GameResult victory={this.state.result.victory}
                                myElement={this.state.result.myElement}
                                enemyElement={this.state.result.enemyElement}/>
                    <Spacer size={50}/>
                    <MenuEndGame onPlayAgain={this.onPlayAgain.bind(this)}
                                 onChangeOption={this.onChangeOptions.bind(this)}
                                 onHome={this.onHome.bind(this)}/>
                </View>
            )
        } else {
            return (<SelectElement mode={this.state.mode} onSelect={this.onSelectElement.bind(this)}/>)
        }
    }

    render() {
        return (
            <View>
                <Spacer size={20}/>
                {this.renderContent()}
            </View>
        );
    }
}
