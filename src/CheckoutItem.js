import React, { Compontent } from 'react';
import TrashCan from 'react-feather';
import styled from 'styled-components';

class CheckoutItem extends Compontent {
    constructor(props) {
        super(props);
        this.state = {qty: 0};
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <ItemContainer>
                <TrashCan />
                <span>{item.name}</span> 
                <span>{this.state.qty}</span>       
            </ItemContainer>
        )
    }
}

export default CheckoutItem;

const ItemContainer = styled.div`
    padding: 10px 5px;
    border-bottom: 1px solid grey;
`