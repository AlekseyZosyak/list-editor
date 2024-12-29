import { control } from "./control";

class ListItem {
    constructor(text, parent, control) {
        this.text = text;
        this.parent = parent;
        this.control = control;
    }

    listElement() {
        const li = document.createElement('li');
        li.classList.add('list-item');
        li.innerHTML = `
                    <span class="list-item__text">${this.text}</span>
                    <button class="list-item__button-add-sublist">add sublist</button>
                    <button class="list-item__button-remove" data-list-remove>remove</button>`;
        this.parent.append(li)
    }

    subListElement() {
        const ul = document.createElement('ul');
        ul.classList.add('list-item');
        ul.innerHTML = `<li>
                    <div>
                        <input type="text">
                        <button data-add-sublist>add sub list</button>
                    </div>
                    </li>`
        this.parent.append(ul)
    }

}

export default ListItem;