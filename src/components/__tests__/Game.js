import 'react-native';
import React        from 'react';
import renderer     from 'react-test-renderer';
import Game         from "../view/Game";

it('Render correctly: No props', () => {
  const tree = renderer.create(
      <Game/>
  );
});

it('Render correctly: Invalid props', () => {
    const tree = renderer.create(
        <Game navigation={"abc"}/>
    );
});

