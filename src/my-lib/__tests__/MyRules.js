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

test('Mode random', () => {
    expect(MyRules.modeRandom()).resolves.toMatch('(rock|scissors|paper)');
    expect(MyRules.modeRandom('classic')).resolves.toMatch('(rock|scissors|paper)');
    expect(MyRules.modeRandom('lizard-spock')).resolves.toMatch('(rock|scissors|paper|lizard|spock)');
});

test('Mode impossible', () => {
    expect(MyRules.modeImpossible('classic', 'scissors')).resolves.toEqual('rock');
    expect(MyRules.modeImpossible('classic', 'paper')).resolves.toEqual('scissors');
    expect(MyRules.modeImpossible('classic', 'rock')).resolves.toEqual('paper');
    expect(MyRules.modeImpossible('lizard-spock', 'scissors')).resolves.toMatch('(rock|spock)');
    expect(MyRules.modeImpossible('lizard-spock', 'paper')).resolves.toMatch('(scissors|lizard)');
    expect(MyRules.modeImpossible('lizard-spock', 'rock')).resolves.toMatch('(paper|spock)');
    expect(MyRules.modeImpossible('lizard-spock', 'spock')).resolves.toMatch('(paper|lizard)');
    expect(MyRules.modeImpossible('lizard-spock', 'lizard')).resolves.toMatch('(scissors|rock)');
});

test('Mode algorithm', () => {
    expect(MyRules.modeAlgorithm('classic')).resolves.toMatch('(rock|scissors|paper)');
    expect(MyRules.modeAlgorithm('lizard-spock')).resolves.toMatch('(rock|scissors|paper|lizard|spock)');
});

test('Play game', () => {
    expect(MyRules.playGame('paper', 'classic', 'random')).resolves.toBeDefined();
    expect(MyRules.playGame('scissors', 'classic', 'random')).resolves.toBeDefined();
    expect(MyRules.playGame('rock', 'classic', 'random')).resolves.toBeDefined();
    expect(MyRules.playGame('paper', 'classic', 'algorithm')).resolves.toBeDefined();
    expect(MyRules.playGame('scissors', 'classic', 'algorithm')).resolves.toBeDefined();
    expect(MyRules.playGame('rock', 'classic', 'algorithm')).resolves.toBeDefined();
    expect(MyRules.playGame('paper', 'classic', 'impossible')).resolves.toBeDefined();
    expect(MyRules.playGame('scissors', 'classic', 'impossible')).resolves.toBeDefined();
    expect(MyRules.playGame('rock', 'classic', 'impossible')).resolves.toBeDefined();
    expect(MyRules.playGame('paper', 'classic', 'random')).resolves.toBeDefined();
    expect(MyRules.playGame('scissors', 'classic', 'random')).resolves.toBeDefined();
    expect(MyRules.playGame('rock', 'classic', 'random')).resolves.toBeDefined();
    expect(MyRules.playGame('lizard', 'classic', 'random')).resolves.toBeDefined();
    expect(MyRules.playGame('spock', 'classic', 'random')).resolves.toBeDefined();
    expect(MyRules.playGame('paper', 'classic', 'algorithm')).resolves.toBeDefined();
    expect(MyRules.playGame('scissors', 'classic', 'algorithm')).resolves.toBeDefined();
    expect(MyRules.playGame('rock', 'classic', 'algorithm')).resolves.toBeDefined();
    expect(MyRules.playGame('lizard', 'classic', 'algorithm')).resolves.toBeDefined();
    expect(MyRules.playGame('spock', 'classic', 'algorithm')).resolves.toBeDefined();
    expect(MyRules.playGame('paper', 'classic', 'impossible')).resolves.toBeDefined();
    expect(MyRules.playGame('scissors', 'classic', 'impossible')).resolves.toBeDefined();
    expect(MyRules.playGame('rock', 'classic', 'impossible')).resolves.toBeDefined();
    expect(MyRules.playGame('lizard', 'classic', 'impossible')).resolves.toBeDefined();
    expect(MyRules.playGame('spock', 'classic', 'impossible')).resolves.toBeDefined();
});




