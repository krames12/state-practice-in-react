import React, { Component } from 'react';

class Item extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            qty: 0,
            price: 0
        };
    }

    render() {
        return(
            <button
                className="item"
                key={this.props.id}
                onClick={() => this.props.clickHandler()}
            >
            {this.props.name}
            </button>
        )
    }
}

export default Item;