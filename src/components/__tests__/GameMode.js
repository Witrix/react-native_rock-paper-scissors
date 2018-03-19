import 'react-native';
import React      from 'react';
import renderer   from 'react-test-renderer';
import GameMode   from "../menu/GameMode";

it('Render correctly: No props', () => {
  const tree = renderer.create(
    <GameMode/>
  );
});

it('Render correctly: Valid props', () => {
    const tree = renderer.create(
        <GameMode mode={"classic"} onSelectMode={() => {}}/>
    );
});

it('Render correctly: Invalid props', () => {
    const tree = renderer.create(
        <GameMode mode={1} onSelectMode={"abc"}/>
    );
});