import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = ({ item }) => (
    <ItemSquare>{item.name}</ItemSquare>
);

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
`