import React, { Component } from 'react';
import {
    View,
    Image,
    Text, StyleSheet,
} from 'react-native';
import AppStyle             from '../../themes/styles';
import AppColor             from '../../themes/colors';
import MyLocalization from "../../my-lib/MyLocalzation";

export default class Element extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
        };
    }


    render() {
        let image = null;
        let name = "";
        //TODO: use rule file;
        switch (this.state.type) {
            case'rock': {
                image = require('../../resources/images/elements/rock.png');
                name = MyLocalization.getString('rock');
                break;
            }
            case'paper': {
                image = require('../../resources/images/elements/paper.png');
                name = MyLocalization.getString('paper');
                break;
            }
            case'scissors': {
                image = require('../../resources/images/elements/scissors.png');
                name = MyLocalization.getString('scissors');
                break;
            }
            case'lizard': {
                image = require('../../resources/images/elements/lizard.png');
                name = MyLocalization.getString('lizard');
                break;
            }
            case'spock': {
                image = require('../../resources/images/elements/spock.png');
                name = MyLocalization.getString('spock');
                break;
            }
        }
        return (
            <View style={style.container}>
                <Image source={image} style={style.image}/>
                <Text>{name}</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
    }
});
