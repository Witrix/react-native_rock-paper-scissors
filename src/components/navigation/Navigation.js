import React, { Component } from 'react';
import { View, StatusBar }  from 'react-native';
import AppStyle             from '../../themes/styles';
import AppColor             from '../../themes/colors';
import Home                 from "../view/Home";
import GameOptions          from '../view/GameOptions';
import Game                 from "../view/Game";

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    goTo(viewName, data) {
        if (['home', 'game', 'game-options'].indexOf(viewName) > -1) {
            this.setState({view: viewName, data: data});
        }
    }

    renderContent() {
        if (this.state.view === 'game-options') {
            return <GameOptions navigation={this}/>
        } else if (this.state.view === 'game') {
            return <Game navigation={this} options={this.state.data}/>
        }
        return (<Home navigation={this}/>)
    }

    render() {
        return (
            <View style={AppStyle.mainView}>
                <StatusBar
                    backgroundColor={AppColor.statusBar}
                    barStyle="dark-content"/>
                {this.renderContent()}
            </View>
        );
    }
}
