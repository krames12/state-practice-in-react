import React, { Component } from 'react';
import styled from 'styled-components';

class CheckoutItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ItemContainer>
                {this.props.name} - {this.props.qty} - <span className="line-price">&#36;{this.props.price}</span>
            </ItemContainer>
        )
    }
}

export default CheckoutItem;

const ItemContainer = styled.div`
    padding: 10px 5px;
    border-bottom: 1px solid grey;
`