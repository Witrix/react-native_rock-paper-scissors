import 'react-native';
import React                    from 'react';
import StatisticsBar            from '../statistics/StatisticsBar';
import renderer                 from 'react-test-renderer';

it('Render correctly', () => {
  const tree = renderer.create(
    <StatisticsBar />
  );
});

it('Render correctly: valid props', () => {
    const tree = renderer.create(
        <StatisticsBar percent={0.5} color={'red'}/>
    );
});

it('Render correctly: invalid props', () => {
    const tree = renderer.create(
        <StatisticsBar percent={"abc"} color={-1}/>
    );
});