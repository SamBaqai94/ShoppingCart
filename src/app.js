import React, { Component } from 'react';
import AddItem from './addItems';

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
            ],
            showComponent: false,
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

    addItem = () => {
        this.setState({
            showComponent: true,
        });
    }

    render() {
        let status = "Number of Item in cart: " + (this.state.items.length > 0 ? this.state.items.length : "Cart is empty");
        return (
            <React.Fragment>
                <div>
                    <h2 className="text-center">Shopping Cart</h2>
                    <p>{status}</p>
                    <button className="float-center ml-10 btn btn-success" onClick={this.addItem}>Add Item</button>

                    <ul className="list-group">
                        {this.state.items.map((item, step) => {
                            return (this.renderList(item, step));
                        })}
                    </ul>

                </div>
                <div>
                    {this.state.showComponent ?
                        <AddItem /> : null
                    }
                </div>
            </React.Fragment>

        );
    }
}

export default ShoppingCart;