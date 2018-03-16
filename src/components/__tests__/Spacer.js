import 'react-native';
import React      from 'react';
import Spacer     from '../general/Spacer';
import renderer   from 'react-test-renderer';

it('Render correctly: No props', () => {
  const tree = renderer.create(
    <Spacer />
  );
});

it('Render correctly: Correct props', () => {
    const tree = renderer.create(
        <Spacer size={20}/>
    );
});

it('Render correctly: Size null', () => {
    const tree = renderer.create(
        <Spacer size={null}/>
    );
});

it('Render correctly: Size invalid', () => {
    const tree = renderer.create(
        <Spacer size={-1}/>
    );
});

it('Render correctly: Size invalid', () => {
    const tree = renderer.create(
        <Spacer size={"abc"}/>
    );
});

