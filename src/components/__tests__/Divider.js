import 'react-native';
import React      from 'react';
import Divider    from '../general/Divider';
import renderer   from 'react-test-renderer';

it('Render correctly: No props', () => {
  const tree = renderer.create(
    <Divider />
  );
});

it('Render correctly: Correct props', () => {
    const tree = renderer.create(
        <Divider size={20}/>
    );
});

it('Render correctly: Size null', () => {
    const tree = renderer.create(
        <Divider size={null}/>
    );
});

it('Render correctly: Size invalid', () => {
    const tree = renderer.create(
        <Divider size={-1}/>
    );
});

it('Render correctly: Size invalid', () => {
    const tree = renderer.create(
        <Divider size={"abc"}/>
    );
});

