import 'react-native';
import React            from 'react';
import renderer         from 'react-test-renderer';
import SelectElement    from "../game/SelectElement";

it('Render correctly: No props', () => {
  const tree = renderer.create(
    <SelectElement/>
  );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: Valid props', () => {
    const tree = renderer.create(
        <SelectElement mode={"classic"} onSelectMode={() => {}}/>
    );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: Invalid props', () => {
    const tree = renderer.create(
        <SelectElement mode={1} onSelectMode={"abc"}/>
    );
    expect(tree).toMatchSnapshot();
});