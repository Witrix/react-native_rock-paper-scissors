import 'react-native';
import React        from 'react';
import renderer     from 'react-test-renderer';
import Statistics   from "../view/Statistics";

it('Render correctly: No props', () => {
    const tree = renderer.create(
        <Statistics/>
    );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: Invalid props', () => {
    const tree = renderer.create(
        <Statistics navigation={"abc"}/>
    );
    expect(tree).toMatchSnapshot();
});
