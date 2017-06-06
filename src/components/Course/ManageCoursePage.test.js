import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme'; 
import { ManageCoursePage } from './ManageCoursePage';

describe('Manage Course Page', () => {
    it('should set error message when trying to save empty title', () => {
        const props = {
            authors : [],
            course: {
                    id: "",
                    title: "",
                    watchHref: "",
                    authorId: "",
                    length: "",
                    category: ""
                },
            actions: { saveCourse: () => {return Promise.resolve(); }}
        };
        const wrapper = mount(<ManageCoursePage {...props}/>);
        const saveButton = wrapper.find('input').last();
        expect(saveButton.prop('type')).toBe('submit');
        saveButton.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
    });
});