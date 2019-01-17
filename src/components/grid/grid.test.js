import React from 'react';
import { shallow } from 'enzyme';
import Grid from './index.jsx';

describe('Grid component', () => {
    it('Renders correctly', () => {
        const wrapper = shallow(<Grid />);
        expect(wrapper.find('.grid')).toBeDefined();
    });

    it('Passes correct params', () => {
        const children = 'Test';
        const wrapper = shallow(<Grid>{children}</Grid>);
        expect(wrapper.find('.grid').text()).toEqual(children);
    });
});
