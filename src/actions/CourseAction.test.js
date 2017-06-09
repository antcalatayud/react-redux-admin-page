import expect from 'expect';
import * as types from './actionTypes';
import * as courseActions from './CourseActions';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

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


//Thunks
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Asysnc Actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });
    
    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
        //arrange
        //example of nock. We need this when change API to a live one
        // nock('http://example.com')
        // .get('/courses')
        // .reply(200,{body : {course: [{id: 1, firstName:"Name", lastName:"lastName"}] }});

        const expectedActions =[
            {type: types.BEGIN_AJAX_CALL},
            {type: types.LOAD_COURSES_SUCCESS, body:{courses:[{id: 'clean-code', title:'Clean Code'}]}}
        ];

        //act
        const store = mockStore({courses:[]}, expectedActions);
        //assert
        store.dispatch(courseActions.loadCourses()).then(() =>{
            const actions = store.getActions();
            expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
            done();   
        });
    });
});