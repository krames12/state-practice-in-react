import React, { Component } from 'react';

class ItemList extends Component {
    state = {
        "items": [
            {
                "id": 1,
                "name": "Can",
                "price": 1.42
            },
            {
                "id": 2,
                "name": "Latte",
                "price": 5.43
            },
            {
                "id": 3,
                "name": "Cup O Noodle",
                "price": 0.87
            },
        ]
    }

    render() {
        return (
            <div className="item-list-container">
                <p>things and stuff</p>
                {this.state.items.map( (item) => <p key={item.id}>{item.name} - {item.price}</p>)}
            </div>
        );
    }
}

export default ItemList;