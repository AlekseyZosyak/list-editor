import { Component } from "react";


class FormPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            reset: ''
        }
    }

    value = (event) => {
        this.setState({ value : event.target.value});
    }
    
    render() {
        const { value } = this.state;
        const { name, addItem } = this.props;

        return (
            <div>
                <input type="text" name="name" 
                    
                    onChange={this.value}/>
                    <button onClick={() => {addItem(value)}}>click</button>
                    <p>{name}</p>
            </div>
        )
    }
}

export default FormPanel;