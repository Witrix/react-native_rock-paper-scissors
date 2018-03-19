import React, { Component } from 'react';
import {View, StatusBar, BackHandler} from 'react-native';
import AppStyle             from '../../themes/styles';
import AppColor             from '../../themes/colors';
import Home                 from "../view/Home";
import GameOptions          from '../view/GameOptions';
import Game                 from "../view/Game";
import About                from "../view/About";

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.previous = [];
        BackHandler.addEventListener('hardwareBackPress', this.goBack.bind(this));
    }

    goBack() {
        if (this.previous && this.previous.length > 0 && this.state.view !== 'home') {
            this.previous.splice(this.previous.length - 1, 1);
            this.setState({view: this.previous[this.previous.length - 1]});
            return true;
        } else {
            return false;
        }
    }

    goTo(viewName, data) {
        if (['home', 'game', 'game-options', 'about'].indexOf(viewName) > -1) {
            this.previous.push(viewName);
            this.setState({view: viewName, data: data});
        }
    }

    renderContent() {
        if (this.state.view === 'game-options') {
            return <GameOptions navigation={this}/>
        } else if (this.state.view === 'game') {
            return <Game navigation={this} options={this.state.data}/>
        } else if (this.state.view === 'about') {
            return <About navigation={this}/>
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
