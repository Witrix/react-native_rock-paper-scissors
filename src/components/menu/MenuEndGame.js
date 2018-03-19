import React, { Component } from 'react';
import {
    View,
    Text,
    Button, StyleSheet,
} from 'react-native';
import AppStyle             from '../../themes/styles';
import AppColor             from '../../themes/colors';
import MyLocalization from "../../my-lib/MyLocalzation";

const MODE = ['classic', 'lizard-spock'];

export default class MenuEndGame extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            mode: props.mode && MODE.indexOf(props.mode) > -1 ? props.mode : 'classic'
        };
    }

    onClickMode(mode) {
        if (this.props.onSelect && typeof this.props.onSelect === 'function') this.props.onSelect(mode);
    }


    onPressPlayAgain() {
        if (this.props.onPlayAgain && typeof this.props.onPlayAgain === 'function') this.props.onPlayAgain();
    }

    onPressChangeOption() {
        if (this.props.onChangeOption && typeof this.props.onChangeOption === 'function') this.props.onChangeOption();
    }

    onPressHome() {
        if (this.props.onHome && typeof this.props.onHome === 'function') this.props.onHome();
    }

    render() {
        return (
            <View>
                <View style={style.button}>
                    <Button  title={MyLocalization.getString('playAgain')}
                             color={AppColor.brand.secondary}
                             onPress={this.onPressPlayAgain.bind(this)}/>
                </View>
                <View style={style.button}>
                    <Button  title={MyLocalization.getString('changeOptions')}
                             color={AppColor.brand.primary}
                             onPress={this.onPressChangeOption.bind(this)}/>
                </View>
                <View style={style.button}>
                    <Button  title={MyLocalization.getString('home')}
                             color={AppColor.brand.primary}
                             onPress={this.onPressHome.bind(this)}/>
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
