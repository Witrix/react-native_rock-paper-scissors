import 'react-native';
import React                    from 'react';
import AiSelectElement          from '../game/AiSelectElement';
import renderer                 from 'react-test-renderer';

it('Render correctly', () => {
  const tree = renderer.create(
    <AiSelectElement />
  );
});

it('Render correctly: valid props', () => {
    const tree = renderer.create(
        <AiSelectElement mode={'classic'}/>
    );
});

it('Render correctly: invalid props', () => {
    const tree = renderer.create(
        <AiSelectElement mode={-1}/>
    );
});