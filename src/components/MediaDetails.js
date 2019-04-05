import React from 'react';
import PropTypes from 'prop-types';

class MediaDetails extends React.Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.mediaDetails.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.mediaDetails;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style = {btnStyle} ></button>
                </p>

            </div>
        );
    }
}
MediaDetails.propTypes = {
    mediaDetails: PropTypes.object.isRequired
}
const btnStyle = {
    background: '#ff0000',
    color: '#ffff',
    border: 'none',
    padding: '15px 20px',
    borderRadius: '50%',
    cursor: 'pointer' ,
    align: 'right'       
}
export default MediaDetails;
