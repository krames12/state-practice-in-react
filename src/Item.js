import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = ({ item }) => (
    <span>{item.name}</span>
);

export default Item;

Item.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
};