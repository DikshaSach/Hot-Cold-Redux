import React from 'react';
import configure from "../setupTests"
import{shallow, mount} from 'enzyme';
import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('Renders without crashing', () =>{
        shallow(<GuessList guesses={[]} />)
    });
    it('shows a list of guesses', () =>{
        const list = [1, 2,3];
        const shallowRender = shallow(<GuessList guesses={list} />);

    })
});
