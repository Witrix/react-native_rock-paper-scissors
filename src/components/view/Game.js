import React, { Component } from 'react';
import { View,
    Text,
    Button,
} from 'react-native';
import AppStyle             from '../../themes/styles';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    onClick() {
        if (this.props.navigation && this.props.navigation.goTo) {
            this.props.navigation.goTo('home');
        }
    }

    render() {
        return (
            <View>
                <Text>Game</Text>
                <Button  title="Go Home"
                         color="#841584"
                         onPress={this.onClick.bind(this)}/>
            </View>
        );
    }
}
