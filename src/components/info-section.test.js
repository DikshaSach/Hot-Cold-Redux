import React from 'react';
import configure from "../setupTests"
import{shallow, mount} from 'enzyme';
import InfoSection from './info-section';

describe('<InfoSection />', () => {
    it('Renders without crashing', () =>{
        shallow(<InfoSection />)
    });
});