import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image
} from 'react-native';
import AppStyle             from '../../themes/styles';
import MyLocalization       from "../../my-lib/MyLocalzation";
import Spacer               from "../general/Spacer";
import AppColor             from "../../themes/colors";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    onClickNavigation(viewName) {
        if (this.props.navigation && this.props.navigation.goTo) {
            this.props.navigation.goTo(viewName);
        }
    }

    render() {
        return (
            <View style={AppStyle.centerVertical}>
                <Text style={AppStyle.h1}>{MyLocalization.getString('appName')}</Text>
                <Spacer size={20}/>
                <View style={style.containerImage}>
                    <Image source={require('../../resources/images/elements/rock.png')}
                           style={style.image}/>
                    <Image source={require('../../resources/images/elements/paper.png')}
                           style={style.image}/>
                </View>
                <View style={style.containerImage}>
                    <Image source={require('../../resources/images/elements/scissors.png')}
                           style={style.image}/>
                </View>
                <Spacer size={20}/>
                <View style={style.button}>
                    <Button  title={MyLocalization.getString('play')}
                             color={AppColor.brand.primary}
                             onPress={this.onClickNavigation.bind(this, 'game-options')}/>
                </View>
                <View style={style.button}>
                    <Button  title={MyLocalization.getString('statistics')}
                             color={AppColor.brand.primary}
                             onPress={this.onClickNavigation.bind(this, 'statistics')}/>
                </View>
                <Spacer size={20}/>
                <Text style={style.textMade}>Made by: William Goillot</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    button: {
        margin: 10
    },
    image: {
        width: 70,
        height: 70,
        margin: 5,
    },
    containerImage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textMade: {
        textAlign: 'center'
    }
});
