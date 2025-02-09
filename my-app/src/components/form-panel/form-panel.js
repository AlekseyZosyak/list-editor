import { Component } from "react";


class FormPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    value = (event) => {
        this.setState({ value : event.target.value});
    }
    
    render() {
        const { value } = this.state;

        return (
            <div>
                <input type="text" name="name" 
                    value={this.state.value}
                    onChange={this.value}/>
                <button>click</button>
                <p>{value}</p>
            </div>
        )
    }
}

export default FormPanel;