import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as courseActions from '../../actions/CourseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };
    }
    render() {
        return (
            <CourseForm 
                allAuthors={[]}
                course={this.state.course}
                errors={this.state.errors}                
            />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
    let course = {
        id: "",
        title: "",
        watchHref: "",
        authorId: "",
        length: "",
        category: ""
    };
    return {
        course: course
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);