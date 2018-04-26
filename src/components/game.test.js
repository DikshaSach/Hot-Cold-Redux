import React from 'react';
import configure from "../setupTests"
import{shallow, mount} from 'enzyme';
import Game from './game';

describe('<Game />', () => {
    it('Renders without crashing', () =>{
        shallow(<Game />)
    });
    it('should start a new game', () =>{
        const shallowRender = shallow(<Game />);
        shallowRender.setState({
            guesses: [1, 2, 3, 4],
            feedback: 'Testing',
            correctAnswer: -1 
        });
        shallowRender.instance().restartGame();
        expect(shallowRender.state('guesses')).toEqual([]);
        expect(shallowRender.state('feedback')).toEqual('Make your guess!');
        expect(shallowRender.state('correctAnswer')).toBeGreaterThanOrEqual(0);
        expect(shallowRender.state('correctAnswer')).toBeLessThanOrEqual(100);
    })
});