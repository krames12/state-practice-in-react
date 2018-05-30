import React, { Component } from 'react';
import { Search } from 'react-feather';

export default () => (
    <div id="search-container">
        <Search id="search-icon" className="icon" />
        <input type="text" id="search-input" />
    </div>
)

