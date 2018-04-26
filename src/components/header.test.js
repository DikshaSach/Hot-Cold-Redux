import React from 'react';
import configure from "../setupTests"
import{shallow, mount} from 'enzyme';
import Header from './header';

describe('<Header />', () => {
    it('Renders without crashing', () =>{
        shallow(<Header />)
    });
});