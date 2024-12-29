import ListItem from "./list-app";
import collectorСollection from "./collector";

class SubList extends ListItem{
    constructor(text) {
        super();
        this.text = text;
    }

    subList(i) {
        const elements = collectorСollection('.list-item');

        const ul = document.createElement('ul');
        ul.classList.add('sub-list-item');
        ul.innerHTML = `
                        <input class="add-sub-input" type="text">
                        <button class="add-sub-list-btn" data-add-sublist>add</button>
                        <button class="closet">closet</button> 
                        `
        elements[i].append(ul)
        
    }

    subListElement(i) {
        const elements = collectorСollection('.list-item');

        const li = document.createElement('li');
        li.classList.add('list-item');
        li.innerHTML = `
                        <span class="list-item__text">${this.text}</span>
                         <button class="list-item__button-add-sublist">add sublist</button>
                        <button class="list-item__button-remove" data-list-remove>remove</button>`;
        elements[i].append(li);
    }

  
}

export default SubList;