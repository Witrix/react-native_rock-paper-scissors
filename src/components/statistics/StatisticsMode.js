import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import StatisticsBar    from "./StatisticsBar";
import AppColors        from "../../themes/colors";
import Spacer           from "../general/Spacer";
import MyLocalization   from "../../my-lib/MyLocalzation";

export default class StatisticsMode extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stat: props.stat,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            stat: nextProps.stat,
        })
    }

    render() {
        if (this.state.stat) {
            let numberVictory = this.state.stat.victory || 0;
            let numberDefeat = this.state.stat.defeat || 0;
            let numberEquality = this.state.stat.equality || 0;
            let numberTotal = (numberDefeat + numberVictory + numberEquality) || 1;
            let percentVictory = numberVictory / numberTotal;
            let percentDefeat = numberDefeat / numberTotal;
            let percentEquality = numberEquality / numberTotal;
            return (
                <View>
                    <Text style={style.text}>{MyLocalization.getString('victory')}: {Math.round(percentVictory * 100)}% ({numberVictory})</Text>
                    <StatisticsBar percent={percentVictory} color={AppColors.positive}/>
                    <Spacer size={5}/>
                    <Text style={style.text}>{MyLocalization.getString('defeat')}: {Math.round(percentDefeat * 100)}% ({numberDefeat})</Text>
                    <StatisticsBar percent={percentDefeat} color={AppColors.brand.secondary}/>
                    <Spacer size={5}/>
                    <Text style={style.text}>{MyLocalization.getString('equality')}: {Math.round(percentEquality * 100)}% ({numberEquality})</Text>
                    <StatisticsBar percent={percentEquality} color={AppColors.brand.primary}/>
                </View>
            );
        } else {
            return (
                <View style={style.noData}>
                    <Text>{MyLocalization.getString('noDataForStat')}</Text>
                </View>
            );
        }
    }
}

const style = StyleSheet.create({
    text: {
        color: 'black',
    },
    noData: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});
