import React, { Component } from 'react';
import {
    View,
    BackHandler,
} from 'react-native';
import Spacer               from "../general/Spacer";
import SelectElement        from "../game/SelectElement";
import MyRules              from "../../my-lib/MyRules";
import GameResult           from "../game/GameResult";
import MenuEndGame          from "../menu/MenuEndGame";
import AiSelectElement      from "../game/AiSelectElement";

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
        let result = MyRules.playGame(element, this.state.mode, this.state.difficulty);
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
                                enemyElement={this.state.result.enemyElement}
                                player={this.state.player}/>
                    <Spacer size={50}/>
                    <MenuEndGame onPlayAgain={this.onPlayAgain.bind(this)}
                                 onChangeOption={this.onChangeOptions.bind(this)}
                                 onHome={this.onHome.bind(this)}/>
                </View>
            )
        } else if (this.state.player === 'ai') {
            return (<AiSelectElement mode={this.state.mode} onSelect={this.onSelectElement.bind(this)}/>)
        } else {
            return (<SelectElement mode={this.state.mode} onSelect={this.onSelectElement.bind(this)}/>);
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
