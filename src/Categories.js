import React, { Component } from 'react';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "All",
        };
    }

    render() {
        return(
            <div className="category-container">
                { this.props.categories.map(
                    category => <div className="category">{category}</div>
                ) }
            </div>
        )
    }
}

export default Categories;