import React from 'react';
import configure from "../setupTests"
import{shallow, mount} from 'enzyme';
import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () =>{
        shallow(<TopNav />)
    });
    it('Should start new game when button clicked', () => {
       const mockFunction = jest.fn();
       const shallowRender = shallow(<TopNav onRestartGame={mockFunction} />)
       const link = shallowRender.find('.new');
       link.simulate('click', {
           preventDefault() {}
       });
       expect(mockFunction).toHaveBeenCalled();
    });
    it('should call onGeneralAuralUpdate', () => {
        const mockFunction = jest.fn();
        const shallowRender = shallow(<TopNav onGenerateAuralUpdate={mockFunction} />) 
        const link = shallowRender.find('.status-link');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(mockFunction).toHaveBeenCalled();
    })
});