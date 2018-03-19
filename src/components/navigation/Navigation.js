import React, { Component } from 'react';
import { View }             from 'react-native';
import AppStyle             from '../../themes/styles';
import Home                 from "../view/Home";
import Game                 from '../view/Game';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    goTo(viewName) {
        console.warn('go to')
        if (['home', 'game'].indexOf(viewName) > -1) {
            this.setState({view: viewName});
        }
    }

    renderContent() {
        if (this.state.view === 'game') {
            return <Game navigation={this}/>
        }
        return (<Home navigation={this}/>)
    }

    render() {
        return (
            <View style={AppStyle.mainView}>
                {this.renderContent()}
            </View>
        );
    }
}
