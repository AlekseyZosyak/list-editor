
class ListItem {
    constructor(text, parent) {
        this.text = text;
        this.parent = parent;
    }

    add() {
        const li = document.createElement('li');
        li.innerHTML = `${this.text}`;
        this.parent.append(li)
    } 

    removeList() {
        
    }
}

export default ListItem;