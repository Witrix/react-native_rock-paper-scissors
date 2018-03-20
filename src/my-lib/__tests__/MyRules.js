import MyRules          from '../MyRules';

test('Get rules', () => {
    expect(MyRules.getRules('classic')).toBeDefined();
    expect(MyRules.getRules('lizard-spock')).toBeDefined();
    expect(MyRules.getRules('invalid')).toBeDefined();
});

test('Get element', () => {
    expect(MyRules.getElement('invalid')).toBeDefined();
    expect(MyRules.getElement('lizard')).toBeDefined();
});

test('Define victory', () => {
    expect(MyRules.defineVictory('classic', 'scissors', 'paper')).toBe(1);
    expect(MyRules.defineVictory('classic', 'paper', 'rock')).toBe(1);
    expect(MyRules.defineVictory('classic', 'rock', 'scissors')).toBe(1);
    expect(MyRules.defineVictory('classic', 'paper', 'scissors')).toBe(-1);
    expect(MyRules.defineVictory('classic', 'rock', 'paper')).toBe(-1);
    expect(MyRules.defineVictory('classic', 'scissors', 'rock')).toBe(-1);
    expect(MyRules.defineVictory('classic', 'paper', 'paper')).toBe(0);
    expect(MyRules.defineVictory('classic', 'rock', 'rock')).toBe(0);
    expect(MyRules.defineVictory('classic', 'scissors', 'scissors')).toBe(0);
    expect(MyRules.defineVictory('lizard-spock', 'scissors', 'paper')).toBe(1);
    expect(MyRules.defineVictory('lizard-spock', 'scissors', 'lizard')).toBe(1);
    expect(MyRules.defineVictory('lizard-spock', 'paper', 'rock')).toBe(1);
    expect(MyRules.defineVictory('lizard-spock', 'paper', 'spock')).toBe(1);
    expect(MyRules.defineVictory('lizard-spock', 'rock', 'scissors')).toBe(1);
    expect(MyRules.defineVictory('lizard-spock', 'rock', 'lizard')).toBe(1);
    expect(MyRules.defineVictory('lizard-spock', 'paper', 'scissors')).toBe(-1);
    expect(MyRules.defineVictory('lizard-spock', 'lizard', 'scissors')).toBe(-1);
    expect(MyRules.defineVictory('lizard-spock', 'rock', 'paper')).toBe(-1);
    expect(MyRules.defineVictory('lizard-spock', 'spock', 'paper')).toBe(-1);
    expect(MyRules.defineVictory('lizard-spock', 'scissors', 'rock')).toBe(-1);
    expect(MyRules.defineVictory('lizard-spock', 'lizard', 'rock')).toBe(-1);
    expect(MyRules.defineVictory('lizard-spock', 'paper', 'paper')).toBe(0);
    expect(MyRules.defineVictory('lizard-spock', 'rock', 'rock')).toBe(0);
    expect(MyRules.defineVictory('lizard-spock', 'scissors', 'scissors')).toBe(0);
    expect(MyRules.defineVictory('lizard-spock', 'spock', 'spock')).toBe(0);
    expect(MyRules.defineVictory('lizard-spock', 'lizard', 'lizard')).toBe(0);
});




