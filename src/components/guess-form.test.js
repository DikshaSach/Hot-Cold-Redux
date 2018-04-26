import React from 'react';
import configure from "../setupTests"
import{shallow, mount} from 'enzyme';
import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () =>{
        shallow(<GuessForm />)
    });
    it('OnSubmit of form should call onMakeGuess', () =>{
        const mockFunction = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={mockFunction}/>);
        const val = 10;
        wrapper.find('input[type="number"]').instance().value = val;
        wrapper.simulate('submit');
        expect(mockFunction).toHaveBeenCalledWith(val.toString());
    })
});