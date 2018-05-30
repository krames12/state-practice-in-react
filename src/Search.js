import React, { Component } from 'react';
import * as Icon from 'react-feather';

class Search extends Component {
    render() {
        return (
            <div id="search-container">
                <Icon.Search id="search-icon" className="icon" />
                <input
                    type="text"
                    id="search-input"
                    placeholder="Search"
                    onChange={ (value) => this.props.itemSearch(value.target.value) }
                />
            </div>
        )
    }
}

export default Search;