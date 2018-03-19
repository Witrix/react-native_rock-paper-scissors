import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

const sizes = {
    screen: {
        height: screenHeight,
        width: screenWidth,
    },
    navbarHeight: (Platform.OS === 'ios') ? 64 : ((Platform.OS === 'android' && Platform.Version >= 21) ? 74 : 54),
    statusBarHeight: (Platform.OS === 'ios') ? 20 : 0
};

export default sizes;