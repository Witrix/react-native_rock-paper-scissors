import 'react-native';
import React        from 'react';
import renderer     from 'react-test-renderer';
import Home         from "../view/Home";

it('Render correctly: No props', () => {
  const tree = renderer.create(
    <Home/>
  );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: Invalid props', () => {
    const tree = renderer.create(
        <Home navigation={"abc"}/>
    );
    expect(tree).toMatchSnapshot();
});


