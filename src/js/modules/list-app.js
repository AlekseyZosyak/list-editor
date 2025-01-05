import collectorСollection from "./collector";



class ListItem {
    constructor(text, parent, control) {
        this.text = text;
        this.parent = parent;
        this.control = control;
        this.ul = document.createElement('ul');
        
    }


    listElement() { 
        
        const upArrow = `<button class="up">&uarr;</button>`;
        const notupArrow = `<button>&darr;</button>`;
        
        const add = [];
        const li = document.createElement('li');
        li.classList.add('list-item');
        this.parent.append(li);
        
        let elements = collectorСollection('.list-item');
        elements.push(add);
        let a = add.map(function(item, i) {
            console.log(item[i])
        });
        console.log(a);
    }

    subList(i) {
        const elements = collectorСollection('.list-item');
        const ul = document.createElement('ul');
        const div = document.createElement('div');
        ul.classList.add('sub-list');
        div.classList.add('sub-list-item');
        div.innerHTML = `
                        <input class="add-sub-input" type="text">
                        <button class="add-sub-list-btn" data-add-sublist>add</button>
                        <button class="closet">closet</button> 
                        `
        elements[i].append(div);
        elements[i].append(ul);

    }

    subListElement(i) {
        const elements = collectorСollection('.sub-list');



        const li = document.createElement('li');
        li.classList.add('list-item');
        li.innerHTML = `
                        <span class="list-item__text">${this.text}</span>
                         <button class="list-item__button-add-sublist">add sublist</button>
                        <button class="list-item__button-remove" data-list-remove>remove</button>
                        `;
        elements[i].append(li);
    }

}

export default ListItem;