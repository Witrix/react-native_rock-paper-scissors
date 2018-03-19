import 'react-native';
import React                    from 'react';
import MenuEndGame              from '../menu/MenuEndGame';
import renderer                 from 'react-test-renderer';

it('Render correctly', () => {
  const tree = renderer.create(
    <MenuEndGame />
  );
});

it('Render correctly: valid props', () => {
    const tree = renderer.create(
        <MenuEndGame mode={'classic'}/>
    );
});

it('Render correctly: invalid props', () => {
    const tree = renderer.create(
        <MenuEndGame mode={-1}/>
    );
});