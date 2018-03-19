import 'react-native';
import React                    from 'react';
import StatisticsMode           from '../statistics/StatisticsMode';
import renderer                 from 'react-test-renderer';

it('Render correctly', () => {
  const tree = renderer.create(
    <StatisticsMode />
  );
});

it('Render correctly: valid props', () => {
    const tree = renderer.create(
        <StatisticsMode stat={{victory: 10, defeat: 10, equality: 10}}/>
    );
});

it('Render correctly: invalid props', () => {
    const tree = renderer.create(
        <StatisticsMode stat={{a: 'b'}}/>
    );
});