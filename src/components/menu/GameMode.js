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

export default class GameMode extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            mode: props.mode && MODE.indexOf(props.mode) > -1 ? props.mode : 'classic'
        };
    }

    onClickMode(mode) {
        this.setState({mode: mode});
        if (this.props.onSelect && typeof this.props.onSelect === 'function') this.props.onSelect(mode);
    }


    render() {
        return (
            <View>
                <Text style={AppStyle.h2}>{MyLocalization.getString('gameMode')}</Text>
                <View style={style.button}>
                    <Button  title={MyLocalization.getString('modeClassic')}
                             color={this.state.mode === 'classic' ? AppColor.brand.secondary : AppColor.brand.primary}
                             onPress={this.onClickMode.bind(this, 'classic')}/>
                </View>
                <View style={style.button}>
                    <Button  title={MyLocalization.getString('modeLizardSpock')}
                             color={this.state.mode === 'lizard-spock' ? AppColor.brand.secondary : AppColor.brand.primary}
                             onPress={this.onClickMode.bind(this, 'lizard-spock')}/>
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