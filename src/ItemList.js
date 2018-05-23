import React, { Component } from 'react';
import { CheckoutConsumer } from './CheckoutContext';
import itemArray, { categories } from './itemArray';
import Item from './Item';

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "items": itemArray,
            "categories": categories,
        }
    }

    render() {
        return (
            <CheckoutConsumer>
                {
                    ({ actions }) => (
                        <div className="item-container">
                            { this.state.items.map(
                                item => <Item
                                            key={item.id}
                                            name={item.name}
                                            clickHandler={() => actions.addItem(item)}
                                        />
                            ) }
                        </div>
                    )
                }
            </CheckoutConsumer>
        );
    }
}

export default ItemList;