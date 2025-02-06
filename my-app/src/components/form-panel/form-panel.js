import { Component } from "react";


class FormPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }


   

    render() {
        return (
            <div>
                <input type="text" name="name"/>
                <button onClick={this.addItem}>click</button>
            </div>
        )
    }
}

export default FormPanel;