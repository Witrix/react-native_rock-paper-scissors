import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage,
} from 'react-native';
import AppStyle             from '../../themes/styles';
import AppColor             from '../../themes/colors';
import MyLocalization       from "../../my-lib/MyLocalzation";
import MyRules              from '../../my-lib/MyRules';
import Element from "./Element";
import Spacer from "../general/Spacer";

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
       this.storeResult();
       this.storeElement();
    }

    storeElement() {
        //TODO: store in object depends on mode
       /* let item = AsyncStorage.getItem(this.state.mode);
        let add = item.then(result => {
            if (!result) {

            }
            return AsyncStorage.setItem(this.state.mode, data.toString());
        });
        Promise.resolve(add).catch(error => {console.warn(error)});*/
    }

    storeResult() {
        let value = "equality";
        if (this.state.victory === -1) {
            value = "defeat";
        } else if (this.state.victory === 0) {
            value = "victory";
        }
        let item = AsyncStorage.getItem(value);
        let add = item.then(result => {
            let data = parseInt(result);
            if (!data) data = 0;
            data = data + 1;
            return AsyncStorage.setItem(value, data.toString());
        });
        Promise.resolve(add).catch(error => {console.warn(error)});
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
                        <Element type={this.state.myElement}/>
                    </View>
                    <View style={style.sidePlayer}>
                        <Text style={style.textPlayer}>{MyLocalization.getString('enemyPlayed')}</Text>
                        <Spacer size={20}/>
                        <Element type={this.state.enemyElement}/>
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
