import React from 'react';
import configure from "../setupTests"
import{shallow, mount} from 'enzyme';
import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () =>{
        shallow(<GuessCount />)
    });
    it('Gives correct guess count', () =>{
        const value =10;
        const shallowRender = shallow(<GuessCount guessCount={value} />);
        expect(shallowRender.text()).toEqual(`You've made ${value} guesses!`);
    })
});