import { Component } from "react";
import Header from "../header/header";
import FormPanel from "../form-panel/form-panel";
import List from "../list/list";
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.maxId = 1;
    }

    addItem = (name) => {
        const newItem = {
            name: name,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            console.log(newArr)
            return { data: newArr}
        })
    }

    render() {
        const { data } = this.state;
        
        return (
            <div className="app">
                <Header/>
                <FormPanel addItem={this.addItem}/>
                <List data={data}/>
            </div>
        )
    }
}

export default App;