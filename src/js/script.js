import { control, resetMainInputValue } from "./modules/control";
import ListItem from "./modules/list-app";
import SubList from "./modules/sub-list";

window.addEventListener('DOMContentLoaded', () => {
    const { mainInput, ul, mainButton, deleteList, parent } = control;


    function collectorСollection(selector) {
        const element = document.querySelectorAll(selector);
        return element;
    }

    function removeList(index) {
        const elements = collectorСollection('.list-item');
        elements.forEach((item, i) => {
            if (i == index) {
                item.remove()
            }
        })
    }

    function closet(index) {
        const elements = collectorСollection('.sub-list-item');
        elements.forEach((item, i) => {
            if (i == index) {
                item.remove();
            }
        })
    }

    mainButton.addEventListener('click', () => {
        if (mainInput.value != null && mainInput.value != '') {
            new ListItem(mainInput.value, ul).listElement();
            resetMainInputValue(control);
        }
    })


    parent.addEventListener('click', (event) => {
        const target = event.target;

        // delete element

        if (target && target.classList.contains('list-item__button-remove')) {
            const elements = collectorСollection('.list-item__button-remove');
            elements.forEach((item, i) => {
                if (target == item) {
                    removeList(i);
                }
            })
        }

        // add sublist control
        
        if (target && target.classList.contains('list-item__button-add-sublist')) {
            const elements = collectorСollection('.list-item__button-add-sublist');
            elements.forEach((item, i) => {
                if (target == item) {
                    new SubList(null, elements[i]).subList(i);
                }
            });
        }

        if (target && target.classList.contains('closet')) {
            const elements = collectorСollection('.closet');
            elements.forEach((item, i) => {
                if (target == item) {
                    closet(i);
                }
            })
        }
        // add sublist element

        // if (target && target.classList.contains('add-sub-list-btn')) {
        //     const inputs = collectorСollection('.add-sub-input');
        //     const elements = collectorСollection('.add-sub-list-btn');
        //     elements.forEach((item, i) => {
        //         if (target == item) {
        //             new SubList(inputs[i].value, elements[i]).subListElement(i);
        //         }
        //     });
        // }
        
        
        
    });

});