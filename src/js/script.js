import control from "./modules/control";
import ListItem from "./modules/list-app";

window.addEventListener('DOMContentLoaded', () => {
    const {input, ul, btn, deleteList, parent} = control;

    btn.addEventListener('click', () => {
        if (input.value != null && input.value != '') {
            new ListItem(input.value, ul).add();
            control.resetInputValue();
        } else {
            control.errorInputValue();
        }
        
    })

    parent.addEventListener('click', (event) => {
        const target = event.target;
        const li = document.querySelectorAll('.list-item');

       
            
            li.forEach((item, i) => {
                if (target || target.getAttribute('data-list-remove')) {
                    item.remove(i);
                }
            })
       

        
    })

    
})