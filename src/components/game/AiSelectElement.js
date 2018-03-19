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

export default class AiSelectElement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: props.mode
        };
    }

    componentDidMount() {
        setTimeout(() => {
            let rules = MyRules.getRules(this.state.mode);
            if (rules && rules.length > 0) {
                let number =  Math.floor(Math.random() * Math.floor(rules.length));
                let selected = rules[number].reference;
                this.setState({selected: selected}, () => {
                    setTimeout(() => {
                        this.onPressElement(this.state.selected)
                    }, 1000)
                })
            }
        }, 1000)
    }

    onPressElement(element) {
        if (this.props.onSelect && typeof this.props.onSelect === 'function') this.props.onSelect(element);
    }

    renderItem(item) {
        let element = item.item;
        return (
            <View style={[style.elementContainer, this.state.selected === element.reference ? {backgroundColor: AppColor.positive} : null]}>
                <Element type={element.reference} mode={this.state.mode}/>
            </View>
        );
    }

    render() {
        let rule = MyRules.getRules(this.state.mode);
        return (
            <View style={style.container}>
                <Text style={AppStyle.h2}>{MyLocalization.getString('aiSelectSign')}</Text>
                <FlatList data={rule}
                          keyExtractor={(item, index) => item.reference}
                          numColumns={3}
                          extraData={this.state.selected}
                          columnWrapperStyle={style.container}
                          renderItem={this.renderItem.bind(this)}/>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    elementContainer: {
        padding: 10,
        borderRadius: 10,
    }
});
