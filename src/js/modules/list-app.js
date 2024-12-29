import { control } from "./control";
import collectorСollection from "./collector";

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

}

export default ListItem;