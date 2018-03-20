import 'react-native';
import React                    from 'react';
import StatisticsBar            from '../statistics/StatisticsBar';
import renderer                 from 'react-test-renderer';

it('Render correctly', () => {
  const tree = renderer.create(
    <StatisticsBar />
  );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: valid props', () => {
    const tree = renderer.create(
        <StatisticsBar percent={0.5} color={'red'}/>
    );
    expect(tree).toMatchSnapshot();
});

it('Render correctly: invalid props', () => {
    const tree = renderer.create(
        <StatisticsBar percent={"abc"} color={-1}/>
    );
    expect(tree).toMatchSnapshot();
});