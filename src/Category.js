import React, { Component } from 'react';

class Category extends Component {
    render() {
        return(
            <div
                className={`category ${ this.props.selected }`}
                onClick={() => this.props.action(this.props.category)}
            >
                {this.props.category}
            </div>
        )
    }
}

export default Category;