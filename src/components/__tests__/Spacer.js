import 'react-native';
import React      from 'react';
import Spacer     from '../general/Spacer';
import renderer   from 'react-test-renderer';

it('Render correctly: No props', () => {
  const tree = renderer.create(
    <Spacer />
  );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: Correct props', () => {
    const tree = renderer.create(
        <Spacer size={20}/>
    );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: Size null', () => {
    const tree = renderer.create(
        <Spacer size={null}/>
    );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: Size invalid', () => {
    const tree = renderer.create(
        <Spacer size={-1}/>
    );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: Size invalid', () => {
    const tree = renderer.create(
        <Spacer size={"abc"}/>
    );
    expect(tree).toMatchSnapshot();
});

