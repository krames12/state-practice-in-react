import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = ({ item }) => (
    <ItemWrapper>
        <p>{item.name}</p>
        <p>${item.price}</p>
    </ItemWrapper>
);

export default Item;

Item.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
};

const ItemWrapper = styled.div`
    border: 1px solid black;
`