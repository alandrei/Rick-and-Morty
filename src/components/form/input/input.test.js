import React from 'react';
import { shallow } from 'enzyme';
import Input from './index.jsx';

describe('Input component', () => {
    it('Renders correctly', () => {
        const wrapper = shallow(<Input value="" />);
        expect(wrapper.find('.input-text')).toBeDefined();
    });

    it('Passes correct params', () => {
        const otherParams = {};
        const wrapper = shallow(<Input value="" others={otherParams} />);
        expect(wrapper.find('.input-text').prop('others')).toEqual(otherParams);
    });
});
