import control from "./modules/control";
import ListItem from "./modules/list-app";

window.addEventListener('DOMContentLoaded', () => {
    const {input, ul, btn} = control;

    btn.addEventListener('click', () => {
        if (input.value != null && input.value != '') {
            new ListItem(input.value, ul).add();
            control.reset();
        } else {
            control.error();
        }
        
        
    })

   

    
})