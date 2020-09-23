import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                name: '',

            },
            resetComponent: false,
        }
    }

    reset = () => {
        this.setState({
            resetComponent: true,
        });
    }

    render() {
        return (
            <div>
                <form>
                    <div className='form-group'>
                        <label >Item Name: </label>
                        <input type="text" className="form-control" id="itemName" placeholder="Item Name" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddItem;