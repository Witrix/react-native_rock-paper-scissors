import React, { NativeModules } from 'react-native';
import FR                       from '../resources/localization/fr';
import EN                       from '../resources/localization/en';

function getLocale () {
    try {
        if (React.Platform.OS === 'android') {
            return NativeModules.RNI18n.getCurrentLocale(locale => locale.replace(/_/, '-'))
        } else {
            return NativeModules.RNI18n.locale.replace(/_/, '-')
        }
    } catch (error) {
        return 'en';
    }
}

function getString(key, locale) {
    try {
        if (!locale) locale = getLocale();
        let file = EN;
        if (locale && locale.toLowerCase() === 'fr') file = FR;
        if (file.hasOwnProperty(key))
            return file[key];
        else return "";
    } catch (error) {
        return "";
    }

}

const MyLocalization = {
    getLocale,
    getString
};

export default MyLocalization;