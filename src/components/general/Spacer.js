import React, { Component } from 'react';
import { View }             from 'react-native';

const DEFAULT_SIZE = 20;

export default class Spacer extends Component {
    constructor(props) {
        super(props);
        let size = DEFAULT_SIZE;
        if (props.size && typeof props.size === 'number' && props.size >= 0) size = props.size;
        this.state = {
            size: size,
        }
    }

    render() {
        return (
            <View style={{marginTop: this.state.size || DEFAULT_SIZE}}/>
        );
    }
}
