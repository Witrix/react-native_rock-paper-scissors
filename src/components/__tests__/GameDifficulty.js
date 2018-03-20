import 'react-native';
import React            from 'react';
import renderer         from 'react-test-renderer';
import GameDifficulty   from "../menu/GameDifficulty";

it('Render correctly: No props', () => {
    const tree = renderer.create(
        <GameDifficulty/>
    );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: Valid props', () => {
    const tree = renderer.create(
        <GameDifficulty mode={"classic"} onSelectMode={() => {}}/>
    );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: Invalid props', () => {
    const tree = renderer.create(
        <GameDifficulty mode={1} onSelectMode={"abc"}/>
    );
    expect(tree).toMatchSnapshot();
});