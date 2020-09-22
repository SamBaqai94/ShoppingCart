import React, { Component } from 'React';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                name: '',
            },
        }
    }
    render() {
        return (
            <div>
                <form>
                    <div className='form-group'>
                        <label for='itemName'>Item Name</label>
                        <input type="text" class="form-control" id="itemName" placeholder="Item Name" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}