import collectorСollection from "./collector";

function test() {
    const elements = document.querySelectorAll('.list-item');
    return elements;
}

class ListItem {
    constructor(text, parent, control) {
        this.text = text;
        this.parent = parent;
        this.control = control;
        this.ul = document.createElement('ul');
        this.data = null;
    }

 


    listElement() {
       test();
        
        const li = document.createElement('li');
        li.innerHTML = `<span class="list-item__text">${this.text}</span>
                ${this.test()}
                <button class="list-item__button-add-sublist">add sublist</button>
                <button class="list-item__button-remove" data-list-remove>remove</button>`;
        li.classList.add('list-item');
        this.parent.append(li);
        this.data.push(li)



        function f() {
            const elements = document.querySelectorAll('.list-item');

            const upArrow = `<button class="up">&uarr;</button>`;
            const notupArrow = `<button>&darr;</button>`;


            let bo = elements;
            let key = null;
            bo.forEach((item, i) => {
                if (i == 0) {
                   
                    key = true
                    console.log(0)
                } else {
                    key = false
                    console.log(1)
                }
            })

            let test = key ? upArrow : notupArrow;
            return test;
        }












        // data.forEach((item, i) => {
        //     if (i == 0) {
        //                 console.log(`${item[i]} - 1`);
        //                 item.innerHTML = `
        //                     <span class="list-item__text">${this.text}</span>
        //                     <button class="list-item__button-add-sublist">add sublist</button>
        //                     <button class="list-item__button-remove" data-list-remove>remove</button>`;
        //                     this.parent.append(item);
        //             } else {
        //                 console.log(`${i} - 2`);
        //                 console.log(`${item[i]} - 2`);
        //                 item.innerHTML = `
        //                     <span class="list-item__text">${this.text}</span>
        //                     <button class="list-item__button-add-sublist">add sublist</button>
        //                     ${upArrow}
        //                     <button class="list-item__button-remove" data-list-remove>remove</button>`;
        //                     this.parent.append(item)
        //             }
        // }) 

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

