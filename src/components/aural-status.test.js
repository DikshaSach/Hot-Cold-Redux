import React from 'react';
import configure from "../setupTests"
import{shallow, mount} from 'enzyme';
import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
    it('Renders without crashing', () =>{
        shallow(<AuralStatus />)
    });
    it('should display aural status', () =>{
        const status = "You are listening to a game!";
        let shallowRender = shallow(<AuralStatus auralStatus={status} />);
        expect(shallowRender.contains(status)).toEqual(true);
    })
});

