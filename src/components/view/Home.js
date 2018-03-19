import React, { Component } from 'react';
import { View,
    Text,
    Button,
} from 'react-native';
import AppStyle             from '../../themes/styles';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    onClick() {
        console.warn('onClick');
        if (this.props.navigation && this.props.navigation.goTo) {
            this.props.navigation.goTo('game');
        }
    }

    render() {
        return (
            <View>
                <Text>Home</Text>
                <Button  title="Go Game"
                         color="#841584"
                         onPress={this.onClick.bind(this)}/>
            </View>
        );
    }
}
