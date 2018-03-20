import 'react-native';
import React        from 'react';
import renderer     from 'react-test-renderer';
import Navigation   from "../navigation/Navigation";

it('Render correctly: No props', () => {
  const tree = renderer.create(
    <Navigation/>
  );
    expect(tree).toMatchSnapshot();
});

