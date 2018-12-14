import React, { Component } from 'react';
import Playlist from './playlist.js';
//import "./playlist.css";

class Category extends Component {
    render() {
        const categories = this.props.data.categories;
        console.log(this.props.data);
        return (
            <div className="Category">
                {
                    categories.map((category) => {
                        return (
                            <Playlist {...category} key={category.id}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default Category;