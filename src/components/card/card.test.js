import React from 'react';
import { shallow } from 'enzyme';
import Card from './index.jsx';

describe('Card component', () => {
    it('Renders correctly', () => {
        const wrapper = shallow(<Card />);
        expect(wrapper.find('.card')).toBeDefined();
        expect(wrapper.find('.card .title')).toBeDefined();
        expect(wrapper.find('.card img')).toBeDefined();
    });

    it('Passes correct params', () => {
        const wrapper = shallow(<Card image="//url.com" title="test" others={[]} />);
        expect(wrapper.find('.card').prop('others')).toEqual([]);
        expect(wrapper.find('.card .title').text()).toEqual('test');
        expect(wrapper.find('.card img').prop('src')).toEqual('//url.com');
        expect(wrapper.find('.card img').prop('alt')).toEqual('test');
    });
});
