import 'react-native';
import React        from 'react';
import renderer     from 'react-test-renderer';
import Statistics   from "../view/Statistics";

it('Render correctly: No props', () => {
    const tree = renderer.create(
        <Statistics/>
    );
});

it('Render correctly: Invalid props', () => {
    const tree = renderer.create(
        <Statistics navigation={"abc"}/>
    );
});
