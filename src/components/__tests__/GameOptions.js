import 'react-native';
import React        from 'react';
import renderer     from 'react-test-renderer';
import GameOptions  from "../view/GameOptions";

it('Render correctly: No props', () => {
  const tree = renderer.create(
      <GameOptions/>
  );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: Invalid props', () => {
    const tree = renderer.create(
        <GameOptions navigation={"abc"}/>
    );
    expect(tree).toMatchSnapshot();
});

