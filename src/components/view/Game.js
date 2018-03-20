import React, { Component } from 'react';
import {
    View,
    Button,
    StyleSheet,
} from 'react-native';
import Spacer               from "../general/Spacer";
import SelectElement        from "../game/SelectElement";
import MyRules              from "../../my-lib/MyRules";
import GameResult           from "../game/GameResult";
import MenuEndGame          from "../menu/MenuEndGame";
import AiSelectElement      from "../game/AiSelectElement";
import MyLocalization       from "../../my-lib/MyLocalzation";

export default class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            difficulty: props.options && props.options.difficulty ?  props.options.difficulty : 'random',
            mode: props.options && props.options.mode ?  props.options.mode : 'classic',
            player: props.options && props.options.player ?  props.options.player : 'player',
        };
    }

    onClickNavigation(viewName, data, flush) {
        if (this.props.navigation && this.props.navigation.goTo) {
            this.props.navigation.goTo(viewName, data, flush);
            return true;
        }
        return false;
    }

    onClickBack() {
        if (this.props.navigation && this.props.navigation.goBack) {
            this.props.navigation.goBack();
            return true;
        }
        return false;
    }

    onSelectElement(element) {
        MyRules.playGame(element, this.state.mode, this.state.difficulty)
            .then(result => {
                this.setState({result: result, error: false});
            }).catch(error => {
            this.setState({error: true});
                console.warn(error);
        });

    }

    onPlayAgain() {
        this.setState({result: null})
    }

    onChangeOptions() {
        this.onClickNavigation('game-options');
    }

    onHome() {
        this.onClickNavigation('home', null, true);
    }

    renderContent() {
        if (this.state.result) {
            return (
                <View>
                    <GameResult victory={this.state.result.victory}
                                myElement={this.state.result.myElement}
                                enemyElement={this.state.result.enemyElement}
                                player={this.state.player}
                                mode={this.state.mode}/>
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

    renderBack() {
        if (!this.state.result) {
            return (
                <View style={style.button}>
                    <Button title={MyLocalization.getString('back')}
                            color={'grey'}
                            onPress={this.onClickBack.bind(this)}/>
                </View>
            );
        }
    }

    render() {
        return (
            <View>
                <Spacer size={20}/>
                {this.renderContent()}
                {this.renderBack()}
            </View>
        );
    }
}

const style = StyleSheet.create({
    button: {
        margin: 10
    }
});
