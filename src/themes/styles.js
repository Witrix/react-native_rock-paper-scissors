import {StyleSheet} from "react-native";
import Colors       from './colors';

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    centerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    h1: {
        color: Colors.text.primary,
        fontSize: 20,
    },
    text: {
        color: Colors.text.primary,
    }
});

export default styles;