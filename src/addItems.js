import React, { Component } from 'react';
import ShoppingCart from './app';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            parentComponent: false,
        }
    }


    handleChange = e => {
        this.setState({
            item: e.target.value,
        });
    }

    submitItem = (e) => {
        e.preventDefault();
        const { item } = this.state;
        const { onSubmit } = this.props;
        onSubmit(item);
        this.setState({
            parentComponent: true,
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.parentComponent ? <ShoppingCart /> :

                    <form onSubmit={this.submitItem}>
                        <div className='form-group'>
                            <label >Item Name: </label>
                            <input type="text" className="form-control" value={this.state.item} onChange={this.handleChange} placeholder="Item Name" />
                        </div>
                        <button type="submit" className="btn btn-primary" >Submit</button>
                    </form>

                }
            </React.Fragment>
        )
    }
}

export default AddItem;