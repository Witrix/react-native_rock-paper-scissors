import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

const AppSizes = {
    screen: {
        height: screenHeight,
        width: screenWidth,
    }
};

export default AppSizes;