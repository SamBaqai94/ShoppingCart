import React, { Component } from 'react';

function Items(props) {
    return (
        <li className="list-group-item">
            <p className="float-left">{props.value}</p>
            <button className="btn btn-danger float-right" onClick={props.onClick}>Remove</button>
        </li >
    );
}

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    'item': 'item1'
                },
                {
                    'item': 'item2'
                },

            ]
        }
    }

    renderList(item, step) {
        return (
            <Items key={step} value={item.item} onClick={() => this.removeItem(step)} />
        )
    }

    removeItem(step) {
        const copied = JSON.parse(JSON.stringify(this.state.items));
        copied.splice(step, 1);
        this.setState({
            items: copied,
        });
    }

    render() {
        let status = "Number of Item in cart: " + (this.state.items.length > 0 ? this.state.items.length : "Cart is empty");
        return (
            <div>
                <h2 className="text-center">Shopping Cart</h2>
                <p>{status}</p>
                <button className="float-center ml-10 btn btn-success">Add Item</button>
                <ul className="list-group">
                    {this.state.items.map((item, step) => {
                        return (this.renderList(item, step));
                    })}

                </ul>
            </div>
        );
    }
}

export default ShoppingCart;