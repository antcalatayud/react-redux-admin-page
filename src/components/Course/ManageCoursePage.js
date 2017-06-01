import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as courseActions from '../../actions/CourseActions';

class ManageCoursePage extends React.Component {
    constructor(props, context){
        super(props, context);
    }
    render() {
        return (
            <div>
            <h1>Manage Course</h1>
            </div>
        );
    }
}

ManageCoursePage.propTypes = {

};

const mapStateToProps = (state, ownProps) => {
    return {
        state: state
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);