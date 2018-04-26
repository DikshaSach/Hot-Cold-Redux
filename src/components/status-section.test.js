import React from 'react';
import configure from "../setupTests"
import{shallow, mount} from 'enzyme';
import StatusSection from './status-section';

describe('<StatusSection />', () => {
    it('Renders without crashing', () =>{
        shallow(<StatusSection  auralStatus="" guesses={[]}/>)
    });
    
});