import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import AppStyle             from '../../themes/styles';
import AppColor             from '../../themes/colors';
import MyLocalization       from "../../my-lib/MyLocalzation";

const MODE = ['random', 'algorithm', 'impossible'];

export default class GameDifficulty extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            mode: props.mode && MODE.indexOf(props.mode) > -1 ? props.mode : 'random'
        };
    }

    componentDidMount() {
        AsyncStorage.getItem('difficulty').then(result => {
            if (MODE.indexOf(result) > -1) {
                this.setState({mode: result});
                if (this.props.onSelect && typeof this.props.onSelect === 'function') this.props.onSelect(result);
            }
        }).catch(error => {console.warn(error)})
    }

    onClickMode(mode) {
        AsyncStorage.setItem('difficulty', mode).catch(error => {console.warn(error)});
        this.setState({mode: mode});
        if (this.props.onSelect && typeof this.props.onSelect === 'function') this.props.onSelect(mode);
    }


    render() {
        return (
            <View>
                <Text style={AppStyle.h2}>{MyLocalization.getString('difficulty')}</Text>
                <View style={style.button}>
                    <Button  title={MyLocalization.getString('random')}
                             color={this.state.mode === 'random' ? AppColor.brand.secondary : AppColor.brand.primary}
                             onPress={this.onClickMode.bind(this, 'random')}/>
                </View>
                <View style={style.button}>
                    <Button  title={MyLocalization.getString('algorithm')}
                             color={this.state.mode === 'algorithm' ? AppColor.brand.secondary : AppColor.brand.primary}
                             onPress={this.onClickMode.bind(this, 'algorithm')}/>
                </View>
                <View style={style.button}>
                    <Button  title={MyLocalization.getString('impossible')}
                             color={this.state.mode === 'impossible' ? AppColor.brand.secondary : AppColor.brand.primary}
                             onPress={this.onClickMode.bind(this, 'impossible')}/>
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
