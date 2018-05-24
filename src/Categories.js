import React, { Component } from 'react';
import Category from './Category';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "All",
        };
    }

    changeCategory = (category) => {
        this.setState({ selected: category })
    }

    render() {
        return(
            <div className="category-container">
                { this.props.categories.map(
                    category => <Category category={category} action={this.changeCategory} />
                ) }
            </div>
        )
    }
}

export default Categories;