import React from 'react';
import {Link} from 'react-router'

class Home extends React.Component {
    state = {  }
    render() {
        return (
            <div className="jumbotron">
                <h1>Admin Page</h1>
                <p>This is a responsible admin page</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>            
            </div>
        );
    }
}

export default Home;