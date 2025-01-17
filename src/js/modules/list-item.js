import { arr } from "../script";

class List {

    arr = arr;

    constructor(tegName, text) {
        this.tegName = tegName;
        this.text = text;

    }

 
    item() {
        const teg = document.createElement(this.tegName);
        teg.className = 'list-item';
        teg.innerHTML = `
                  <span>${this.text}</span>
                <button>&darr;</button>
                <button>Add Sublist</button>
                <button data-remove>Remove</button>
                `;
        return teg;
    }

     
}

export default List;