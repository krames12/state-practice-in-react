import React, { Component } from 'react';
import { CheckoutConsumer } from './CheckoutContext';
import Category from "./Category";
import itemArray, { categories } from './itemArray';
import Item from './Item';

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "items": itemArray,
            "category": "All",
        }
    }

    changeCategory = (category) => {
        this.setState({ category: category })
        this.filterItemList(category);
    }

    filterItemList = (category) => {
        let itemList = itemArray.filter( item => {
            if(item.category.includes(category) || category === "All") {
                return item;
            }
        });

        this.setState({ items: itemList });
    }

    render() {
        return (
            <React.Fragment>
                <div className="category-container">
                    { categories.map(
                        category => <Category
                                        key={category.id}
                                        category={category.name}
                                        action={this.changeCategory}
                                        selected={this.state.category === category.name? "selected" : ""}
                                    />
                    ) }
                </div>
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
            </React.Fragment>
        );
    }
}

export default ItemList;