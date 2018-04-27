import React, { Component } from 'react';
import TrashCan from 'react-feather';
import styled from 'styled-components';

class CheckoutItem extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <ItemContainer>
                <TrashCan />
                <span>{this.props.name}</span> 
                <span>{this.props.qty}</span>       
            </ItemContainer>
        )
    }
}

export default CheckoutItem;

const ItemContainer = styled.div`
    padding: 10px 5px;
    border-bottom: 1px solid grey;
`