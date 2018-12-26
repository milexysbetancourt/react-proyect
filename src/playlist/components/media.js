import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import "./media.css";

class Media extends PureComponent {
    state = {
        author: 'Leonidas Esteban'
    }
    
    handleClick = (event) => {
        this.props.openModal(this.props);
    }
    
    render() {
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img 
                        src={this.props.cover}
                        alt=""
                        width={220}
                        height={160}
                        className="Media-image"
                    />
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-autor">{this.props.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;