import { control, resetMainInputValue } from "./modules/control";
import ListItem from "./modules/list-app";

window.addEventListener('DOMContentLoaded', () => {
    const { mainInput, ul, mainButton, deleteList, parent } = control;

    function test() {
        const element = document.querySelectorAll('.list-item__button-remove');
        return element;
    }
    function test2() {
        const element = document.querySelectorAll('.list-item');
        return element;
    }

    function removeList(index) {
        
        const items = test2();
        items.forEach((item, i) => {
            if (i == index) {
                item.remove()
            }
        })
    }


    mainButton.addEventListener('click', () => {
        if (mainInput.value != null && mainInput.value != '') {
            new ListItem(mainInput.value, ul).add();
            resetMainInputValue(control);
            test();
            test2();
        }
    })

    parent.addEventListener('click', (event) => {
        const target = event.target;

        // delete element
        if (target && target.classList.contains('list-item__button-remove')) {
            const add = test();
            add.forEach((item, i) => {
                if (target == item) {
                   removeList(i);
                }
            })
        }

    })
    
});