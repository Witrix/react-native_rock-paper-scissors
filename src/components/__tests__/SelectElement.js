import 'react-native';
import React            from 'react';
import renderer         from 'react-test-renderer';
import SelectElement    from "../game/SelectElement";

it('Render correctly: No props', () => {
  const tree = renderer.create(
    <SelectElement/>
  );
});

it('Render correctly: Valid props', () => {
    const tree = renderer.create(
        <SelectElement mode={"classic"} onSelectMode={() => {}}/>
    );
});

it('Render correctly: Invalid props', () => {
    const tree = renderer.create(
        <SelectElement mode={1} onSelectMode={"abc"}/>
    );
});