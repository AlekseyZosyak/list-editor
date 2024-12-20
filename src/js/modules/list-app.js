import control from "./control";

class ListItem {
    constructor(text, parent, control) {
        this.text = text;
        this.parent = parent;
        this.control = control;
    }

    add() {
        const li = document.createElement('li');
        li.classList.add('list-item');
        li.innerHTML = `
                    <span class="list-item__text">${this.text}</span>
                    <button class="list-item__button-add-sublist">add sublist</button>
                    <button class="list-item__button-remove" data-list-remove>remove</button>`;
        this.parent.append(li)
    } 

    removeList() {
        const {parent} = control;

        const items = document.querySelectorAll('.list-item');
        items.forEach((item, i) => {
            item.remove()
        })
    }
}

export default ListItem;