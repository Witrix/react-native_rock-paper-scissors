import React, { Component } from 'react';
import {View, StatusBar, BackHandler} from 'react-native';
import AppStyle             from '../../themes/styles';
import AppColor             from '../../themes/colors';
import Home                 from "../view/Home";
import GameOptions          from '../view/GameOptions';
import Game                 from "../view/Game";
import Statistics           from "../view/Statistics";

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
            if (this.previous[this.previous.length - 1] === this.state.view)
                this.previous.splice(this.previous.length - 1, 1);
            this.setState({view: this.previous[this.previous.length - 1]});
            return true;
        } else {
            return false;
        }
    }

    goTo(viewName, data, flush = false) {
        if (['home', 'game', 'game-options', 'statistics'].indexOf(viewName) > -1) {
            if (flush) this.previous = [];
            this.addViewToStack(viewName);
            this.setState({view: viewName, data: data});
        }
    }

    addViewToStack(view) {
        if (this.previous.indexOf(view) <= -1) {
            this.previous.push(view);
        }
    }

    renderContent() {
        if (this.state.view === 'game-options') {
            return <GameOptions navigation={this}/>
        } else if (this.state.view === 'game') {
            return <Game navigation={this} options={this.state.data}/>
        } else if (this.state.view === 'statistics') {
            return <Statistics navigation={this}/>
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
