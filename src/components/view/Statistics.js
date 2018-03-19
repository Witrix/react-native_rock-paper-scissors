import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Button,
    AsyncStorage
} from 'react-native';
import AppStyle             from '../../themes/styles';
import MyLocalization       from "../../my-lib/MyLocalzation";
import Spacer               from "../general/Spacer";
import StatisticsMode       from "../statistics/StatisticsMode";
import Divider              from "../general/Divider";

export default class Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        AsyncStorage.getItem('classic').then(result => {
            let data = JSON.parse(result);
            this.setState({classic: data})
        }).catch(error => {console.warn(error)});
        AsyncStorage.getItem('lizard-spock').then(result => {
            let data = JSON.parse(result);
            this.setState({lizard: data})
        }).catch(error => {console.warn(error)});
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
                        <Text style={AppStyle.h1}>{MyLocalization.getString('statistics')}</Text>
                        <Spacer size={20}/>
                        <Text style={style.title}>{MyLocalization.getString('modeClassic')} - {MyLocalization.getString('allDifficulties')}</Text>
                        <Spacer size={5}/>
                        <StatisticsMode stat={this.state.classic}/>
                        <Spacer size={20}/>
                        <Divider/>
                        <Spacer size={20}/>
                        <Text style={style.title}>{MyLocalization.getString('modeLizardSpock')} - {MyLocalization.getString('allDifficulties')}</Text>
                        <Spacer size={5}/>
                        <StatisticsMode stat={this.state.lizard}/>
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
    title: {
        fontSize: 18,
        color: 'black'
    },
    text: {
        color: 'black'
    }
});
