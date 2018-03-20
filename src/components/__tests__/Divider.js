import 'react-native';
import React      from 'react';
import Divider    from '../general/Divider';
import renderer   from 'react-test-renderer';

it('Render correctly: No props', () => {
  const tree = renderer.create(
    <Divider />
  );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: Correct props', () => {
    const tree = renderer.create(
        <Divider size={20}/>
    );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: Size null', () => {
    const tree = renderer.create(
        <Divider size={null}/>
    );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: Size invalid', () => {
    const tree = renderer.create(
        <Divider size={-1}/>
    );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: Size invalid', () => {
    const tree = renderer.create(
        <Divider size={"abc"}/>
    );
    expect(tree).toMatchSnapshot();
});

