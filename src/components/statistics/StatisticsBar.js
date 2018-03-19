import React, { Component } from 'react';
import {
    View,
    Text, StyleSheet,
} from 'react-native';
import AppColors            from "../../themes/colors";

export default class StatisticsBar extends Component {

    constructor(props) {
        super(props);
        let percent = 0.01;
        if (props.percent && typeof props.percent === 'number' && props.percent >= 0) percent = props.percent;
        this.state = {
            percent: percent,
            color: props.color,
        }
    }

    componentWillReceiveProps(nextProps) {
        let percent = 0.01;
        if (nextProps.percent && typeof nextProps.percent === 'number' && nextProps.percent >= 0) percent = nextProps.percent;
        this.setState({
            percent: percent,
            color: nextProps.color,
        })
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row', margin: 1}}>
                <View style={{flex: this.state.percent, backgroundColor: this.state.color || AppColors.brand.primary, height: 10}}/>
                <View style={{flex: 1 - this.state.percent, height: 10}}/>
            </View>
        );
    }
}
