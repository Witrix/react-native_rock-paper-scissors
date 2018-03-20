import 'react-native';
import React      from 'react';
import renderer   from 'react-test-renderer';
import GamePlayerMode   from "../menu/GamePlayerMode";

it('Render correctly: No props', () => {
  const tree = renderer.create(
    <GamePlayerMode/>
  );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: Valid props', () => {
    const tree = renderer.create(
        <GamePlayerMode mode={"ai"} onSelectMode={() => {}}/>
    );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: Invalid props', () => {
    const tree = renderer.create(
        <GamePlayerMode mode={1} onSelectMode={"abc"}/>
    );
    expect(tree).toMatchSnapshot();
});