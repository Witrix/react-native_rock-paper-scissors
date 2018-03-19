import React, { Component } from 'react';
import {
    View,
    Image,
    Text, StyleSheet,
} from 'react-native';
import MyLocalization       from "../../my-lib/MyLocalzation";
import MyRules              from '../../my-lib/MyRules';

export default class Element extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
            mode: props.mode,
        };
    }


    render() {
        let image = null;
        let name = "";
        let element = MyRules.getElement(this.state.type, this.state.mode);
        if (element) {
            image = element.resourceKey;
            name = MyLocalization.getString(element.localizedKey);
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
