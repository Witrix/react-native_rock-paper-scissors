import 'react-native';
import React                    from 'react';
import AiSelectElement          from '../game/AiSelectElement';
import renderer                 from 'react-test-renderer';

it('Render correctly', () => {
  const tree = renderer.create(
    <AiSelectElement />
  );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: valid props', () => {
    const tree = renderer.create(
        <AiSelectElement mode={'classic'}/>
    );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: invalid props', () => {
    const tree = renderer.create(
        <AiSelectElement mode={-1}/>
    );
    expect(tree).toMatchSnapshot();
});