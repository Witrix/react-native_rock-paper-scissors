import MyLocalization          from '../MyLocalzation';
import {NativeModules} from "react-native";

test('Get Locale: with mock', () => {
    NativeModules.I18nManager = {localeIdentifier: 'fr_FR'};
    expect(MyLocalization.getLocale()).toMatch(/[A-z]{2}/g);
});

test('Get Locale: without mock', () => {
    expect(MyLocalization.getLocale()).toMatch(/[A-z]{2}/g);
});

test('Get String: No parameters', () => {
    expect(MyLocalization.getString()).toBeDefined();
});

test('Get String: correct key', () => {
    expect(MyLocalization.getString('appName')).toBeDefined();
});

test('Get String: invalid key', () => {
    expect(MyLocalization.getString('xxxxx')).toBeDefined();
});

test('Get String: correct locale', () => {
    expect(MyLocalization.getString('appName', 'en')).toBeDefined();
});

test('Get String: invalid locale', () => {
    expect(MyLocalization.getString('appName', 'xxxx')).toBeDefined();
});