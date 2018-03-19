import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Button,
} from 'react-native';
import AppStyle             from '../../themes/styles';
import MyLocalization       from "../../my-lib/MyLocalzation";
import Spacer               from "../general/Spacer";

export default class About extends Component {
    constructor(props) {
        super(props);
    }

    onClickBack() {
        if (this.props.navigation && this.props.navigation.goBack) {
            this.props.navigation.goBack();
            return true;
        }
        return false;
    }

    render() {
        return (
            <View style={style.container}>
                <View style={{flex: 0.9}}>
                    <ScrollView>
                        <Text style={AppStyle.h1}>{MyLocalization.getString('about')}</Text>
                        <Spacer size={20}/>
                        <Text style={style.text}>Author: William Goillot</Text>
                    </ScrollView>
                </View>
                <View style={{flex: 0.1, marginHorizontal: 10}}>
                    <Button title={MyLocalization.getString('back')} color={"grey"}
                    onPress={this.onClickBack.bind(this)}/>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    text: {
        color: 'black'
    }
});
