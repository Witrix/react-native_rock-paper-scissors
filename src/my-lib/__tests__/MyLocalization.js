import MyLocalization          from '../MyLocalzation';

test('Get Locale', () => {
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