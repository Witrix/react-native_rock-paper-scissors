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

export default class GameOptions extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {};
        BackHandler.addEventListener('hardwareBackPress', this.onClickNavigation.bind(this, 'home'));
    }

    onClickNavigation(viewName, data) {
        if (this.props.navigation && this.props.navigation.goTo) {
            this.props.navigation.goTo(viewName, data);
            return true;
        }
        return false;
    }

    onSelectMode(mode) {
        this.setState({mode: mode});
    }

    onSelectDifficulty(difficulty) {
        this.setState({difficulty: difficulty});
    }

    render() {
        return (
            <View>
                <Spacer size={20}/>
                <Text style={AppStyle.h1}>{MyLocalization.getString('appName')}</Text>
                <Spacer size={20}/>
                <GameMode onSelect={this.onSelectMode.bind(this)}/>
                <Spacer size={20}/>
                <GameDifficulty onSelect={this.onSelectDifficulty.bind(this)}/>
                <Spacer size={20}/>
                <View style={style.button}>
                    <Button title={MyLocalization.getString('launchGame')}
                            color={AppColor.brand.secondary}
                            onPress={this.onClickNavigation.bind(this, 'game', {mode: this.state.mode, difficulty: this.state.difficulty})}/>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    button: {
        margin: 10
    }
});
