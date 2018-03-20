import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage,
} from 'react-native';
import AppColor             from '../../themes/colors';
import MyLocalization       from "../../my-lib/MyLocalzation";
import Element              from "./Element";
import Spacer               from "../general/Spacer";

export default class GameResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            victory: props.victory,
            myElement: props.myElement,
            enemyElement: props.enemyElement,
            player: props.player,
            mode: props.mode,
        };
    }

    componentDidMount() {
        if (this.state.mode) {
            this.storeResult();
        }
    }

    storeResult() {
        let item = AsyncStorage.getItem(this.state.mode);
        let update = item.then(result => {
            let valueName = this.state.victory === 1 ? 'victory' : (this.state.victory === -1 ? 'defeat' : 'equality');
            let valueElement = this.state.myElement;
            let data = {};
            if (!result) {
                data[valueName] = 1;
                data[valueElement] = 1;
            } else {
                data = JSON.parse(result);
                data[valueName] = data[valueName] ? (data[valueName] + 1) : 1;
                data[valueElement] = data[valueElement] ? (data[valueElement] + 1) : 1;
            }
            return AsyncStorage.setItem(this.state.mode, JSON.stringify(data));
        });
        Promise.resolve(update).catch(error => {console.warn(error)})
    }

    render() {
        let text = MyLocalization.getString('equality');
        let styleText = style.textEquality;
        if (this.state.victory === 1) {
            styleText = style.textVictory;
            text = MyLocalization.getString('victory');
        }
        else if (this.state.victory === -1) {
            styleText = style.textDefeat;
            text = MyLocalization.getString('defeat');
        }
        return (
            <View style={style.container}>
                <Text style={styleText}>{text}</Text>
                <Spacer size={20}/>
                <View style={style.players}>
                    <View style={style.sidePlayer}>
                        <Text style={style.textPlayer}>{this.state.player === 'ai' ? MyLocalization.getString('youAiPlayed') : MyLocalization.getString('youPlayed')}</Text>
                        <Spacer size={20}/>
                        <Element type={this.state.myElement} mode={this.state.mode}/>
                    </View>
                    <View style={style.sidePlayer}>
                        <Text style={style.textPlayer}>{MyLocalization.getString('enemyPlayed')}</Text>
                        <Spacer size={20}/>
                        <Element type={this.state.enemyElement} mode={this.state.mode}/>
                    </View>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textPlayer: {
        fontSize: 20,
    },
    players: {
        flexDirection: 'row'
    },
    sidePlayer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textEquality: {
        fontSize: 40,
        color: 'black',
    },
    textVictory: {
        fontSize: 40,
        color: AppColor.brand.primary,
    },
    textDefeat: {
        fontSize: 40,
        color: AppColor.brand.secondary,
    }
});
