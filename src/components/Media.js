import React from 'react';
import MediaDetails from './MediaDetails';
import PropTypes from 'prop-types';

class Media extends React.Component {
     
  render() {
    return this.props.media.map((med)=>(       
        <MediaDetails key={med.id} mediaDetails={med} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ));
  }
}

//PropTypes
Media.propTypes = {
    media: PropTypes.array.isRequired
}
export default Media;
