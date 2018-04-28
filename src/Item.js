import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 0,
            price: 0
        };
    }

    addItem = () => {
        console.log(this.props.item);
    }

    render() {
        return(
            <ItemSquare onClick={ this.addItem.bind(this) } >{this.props.item.name}</ItemSquare>
        )
    }
}

export default Item;

Item.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
};

const ItemSquare = styled.button`
    padding: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    min-width: 50px;
    padding: 1rem;
    border-radius: 5px;
`