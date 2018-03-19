import 'react-native';
import React      from 'react';
import Element    from '../game/Element';
import renderer   from 'react-test-renderer';

it('Render correctly: No props', () => {
  const tree = renderer.create(
    <Element />
  );
});

it('Render correctly: Rock', () => {
    const tree = renderer.create(
        <Element type="rock"/>
    );
});

it('Render correctly: Paper', () => {
    const tree = renderer.create(
        <Element type="paper"/>
    );
});

it('Render correctly: Scissors', () => {
    const tree = renderer.create(
        <Element type="scissors"/>
    );
});

it('Render correctly: Lizard', () => {
    const tree = renderer.create(
        <Element type="lizard"/>
    );
});

it('Render correctly: Spock', () => {
    const tree = renderer.create(
        <Element type="spock"/>
    );
});

it('Render correctly: Invalid props', () => {
    const tree = renderer.create(
        <Element type={-1}/>
    );
});

