import React from 'react';
import configure from "../setupTests"
import{shallow, mount} from 'enzyme';
import Feedback from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () =>{
        shallow(<Feedback />)
    });
    it('Should give some feedback.' , () =>{
        const feedback = "this is feedback";
        const shallowRender = shallow(<Feedback feedback={feedback} />);
        expect(shallowRender.contains(feedback)).toEqual(true);
    })
});