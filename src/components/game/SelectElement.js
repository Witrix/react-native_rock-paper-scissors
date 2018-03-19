import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import AppStyle             from '../../themes/styles';
import AppColor             from '../../themes/colors';
import MyLocalization       from "../../my-lib/MyLocalzation";
import MyRules              from '../../my-lib/MyRules';
import Element from "./Element";

export default class SelectElement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: props.mode
        };
    }

    onPressElement(element) {
        if (this.props.onSelect && typeof this.props.onSelect === 'function') this.props.onSelect(element);
    }

    renderItem(item) {
        let element = item.item;
        return (
            <TouchableHighlight style={style.elementContainer}
                                underlayColor={'transparent'}
                                onPress={this.onPressElement.bind(this, element.reference)}>
                <Element type={element.reference} mode={this.state.mode}/>
            </TouchableHighlight>
        );
    }

    render() {
        let rule = MyRules.getRules(this.state.mode);
        return (
            <View style={style.container}>
                <Text style={AppStyle.h2}>{MyLocalization.getString('selectSign')}</Text>
                <FlatList data={rule}
                          keyExtractor={(item, index) => item.reference}
                          numColumns={3}
                          columnWrapperStyle={style.container}
                          renderItem={this.renderItem.bind(this)}/>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    elementContainer: {
        margin: 10
    }
});
