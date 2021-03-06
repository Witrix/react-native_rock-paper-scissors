import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    AsyncStorage,
} from 'react-native';
import AppStyle             from '../../themes/styles';
import AppColor             from '../../themes/colors';
import MyLocalization       from "../../my-lib/MyLocalzation";

const MODE = ['player', 'ai'];

export default class GamePlayerMode extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: props.mode && MODE.indexOf(props.mode) > -1 ? props.mode : 'player'
        };
    }

    componentDidMount() {
        AsyncStorage.getItem('player').then(result => {
            if (MODE.indexOf(result) > -1) {
                this.setState({mode: result});
                if (this.props.onSelect && typeof this.props.onSelect === 'function') this.props.onSelect(result);
            }
        }).catch(error => {console.warn(error)})
    }

    onClickMode(mode) {
        AsyncStorage.setItem('player', mode).catch(error => {console.warn(error)});
        this.setState({mode: mode});
        if (this.props.onSelect && typeof this.props.onSelect === 'function') this.props.onSelect(mode);
    }


    render() {
        return (
            <View>
                <Text style={AppStyle.h2}>{MyLocalization.getString('playerMode')}</Text>
                <View style={style.button}>
                    <Button  title={MyLocalization.getString('playerVsAi')}
                             color={this.state.mode === 'player' ? AppColor.brand.secondary : AppColor.brand.primary}
                             onPress={this.onClickMode.bind(this, 'player')}/>
                </View>
                <View style={style.button}>
                    <Button  title={MyLocalization.getString('aiVsAi')}
                             color={this.state.mode === 'ai' ? AppColor.brand.secondary : AppColor.brand.primary}
                             onPress={this.onClickMode.bind(this, 'ai')}/>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    button: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
});
