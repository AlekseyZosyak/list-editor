import { Component } from "react";
import Header from "../header/header";
import FormPanel from "../form-panel/form-panel";
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: '' },
            ]
        }
    }


    render() {
        return (
            <div className="app">
                <Header />
                <FormPanel/>
            </div>
        )
    }
}

export default App;