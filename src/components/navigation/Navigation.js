import React, { Component } from 'react';
import { View, StatusBar }  from 'react-native';
import AppStyle             from '../../themes/styles';
import AppColor             from '../../themes/colors';
import Home                 from "../view/Home";
import GameOptions          from '../view/GameOptions';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    goTo(viewName) {
        if (['home', 'game', 'game-options'].indexOf(viewName) > -1) {
            this.setState({view: viewName});
        }
    }

    renderContent() {
        if (this.state.view === 'game-options') {
            return <GameOptions navigation={this}/>
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
