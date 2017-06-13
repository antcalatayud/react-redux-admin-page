import expect from 'expect';
import CourseReducer from './CourseReducer';
import * as actions from '../actions/CourseActions';

describe('Course Reducer', () => {
    it('should add course when passed CREATE_COURSE_SUCCESS', () => {
        //arange
        const initialState = [
            {title: 'A'},
            {title: 'B'}
        ];

        const newCourse = {title: 'C'};
        const action = actions.createCourseSuccess(newCourse);

        //act
        const newState = CourseReducer(initialState, action);

        //assert
        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('A');
        expect(newState[1].title).toEqual('B');
        expect(newState[2].title).toEqual('C');
    });

    it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
        //arange
        const initialState = [
            {id: 'A', title: 'A'},
            {id: 'B', title: 'B'}
        ];

        const course = {id: 'B', title: 'New title'};
        const action = actions.updateCourseSuccess(course);

        //act
        const newState = CourseReducer(initialState, action);
        const updatedCourse = newState.find(c => c.id == course.id);
        const untouchedCourse = newState.find(c => c.id == 'A');

        //assert
        expect(updatedCourse.title).toEqual('New title');
        expect(untouchedCourse.title).toEqual('A');
        expect(newState.length).toEqual(2);
    });
});