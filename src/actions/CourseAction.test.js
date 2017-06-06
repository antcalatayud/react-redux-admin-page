import expect from 'expect';
import * as types from './actionTypes';
import * as courseActions from './CourseActions';

describe('Course Actions', () => {
    describe('createCourseSucces', () => {
        it('should create a CREATE_COUSE_SUCCESS action', () => {
            //arrange
            const course = {id: "new-course", title: "New Course"};
            const expectedAction = {
                type: types.CREATE_COURSE_SUCCESS,
                course: course
            };
            //act
            const action = courseActions.createCourseSuccess(course);
            //assert
            expect(action).toEqual(expectedAction);
        });        
    });
});