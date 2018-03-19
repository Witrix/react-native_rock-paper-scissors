import 'react-native';
import React                    from 'react';
import GameResult               from '../game/GameResult';
import renderer                 from 'react-test-renderer';

it('Render correctly', () => {
    const tree = renderer.create(
        <GameResult />
    );
});

it('Render correctly: valid props', () => {
    const tree = renderer.create(
        <GameResult victory={1}
                    myElement={'paper'}
                    enemyElement={'rock'}
                    player={'player'}
                    mode={'classic'}/>
    );
});

it('Render correctly: invalid props', () => {
    const tree = renderer.create(
        <GameResult victory={'abc'}
                    myElement={-1}
                    enemyElement={-1}
                    player={-1}
                    mode={-1}/>
    );
});