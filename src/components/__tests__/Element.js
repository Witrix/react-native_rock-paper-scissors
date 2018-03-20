import 'react-native';
import React      from 'react';
import Element    from '../game/Element';
import renderer   from 'react-test-renderer';

it('Render correctly: No props', () => {
  const tree = renderer.create(
    <Element />
  );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: Rock', () => {
    const tree = renderer.create(
        <Element type="rock"/>
    );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: Paper', () => {
    const tree = renderer.create(
        <Element type="paper"/>
    );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: Scissors', () => {
    const tree = renderer.create(
        <Element type="scissors"/>
    );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: Lizard', () => {
    const tree = renderer.create(
        <Element type="lizard"/>
    );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: Spock', () => {
    const tree = renderer.create(
        <Element type="spock"/>
    );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: Invalid props', () => {
    const tree = renderer.create(
        <Element type={-1}/>
    );
    expect(tree).toMatchSnapshot();
});

