import React, { NativeModules } from 'react-native';
import FR                       from '../resources/localization/fr';
import EN                       from '../resources/localization/en';

function getLocale () {
    try {
        if (NativeModules.I18nManager && NativeModules.I18nManager.localeIdentifier) {
            let localeIdentifier = NativeModules.I18nManager.localeIdentifier;
           let locales = localeIdentifier.split('_');
           if (locales && locales.length > 0)
               return locales[0];
        }
    } catch (error) {}
    return 'en';
}

function getString(key, locale) {
    if (!locale) locale = getLocale();
    let file = EN;
    if (locale && locale.toLowerCase() === 'fr') file = FR;
    if (file && file.hasOwnProperty(key))
        return file[key];
    else return "";
}

const MyLocalization = {
    getLocale,
    getString
};

export default MyLocalization;