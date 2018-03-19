import MyRules          from '../MyRules';

test('Get rules: classic', () => {
    expect(MyRules.getRules('classic')).toBeDefined();
});

test('Get rules: lizard-spock', () => {
    expect(MyRules.getRules('lizard-spock')).toBeDefined();
});

test('Get rules: invalid mode', () => {
    expect(MyRules.getRules('invalid')).toBeDefined();
});

test('Get element: invalid mode', () => {
    expect(MyRules.getElement('invalid')).toBeDefined();
});

test('Get element: valid element', () => {
    expect(MyRules.getElement('lizard')).toBeDefined();
});





