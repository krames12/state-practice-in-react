import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Item = ({ item }) => (
    <div className="item-box">
        <p>{item.name}</p>
        <p>${item.price}</p>
    </div>
);

export default Item;

Item.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
};