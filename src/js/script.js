import List from "./modules/list-item";

const mainUl = document.querySelector('[data-main-ul]');
const mainInput = document.querySelector('[data-main-input]');
const mainButton = document.querySelector('[data-main-button]');
export const arr = [];

mainButton.addEventListener('click', () => {
    const a = new List('li', mainInput.value).item();
    arr.push(a);
    checked(arr);
    
});


// function control(data) {

    
//     const elem = document.createElement('button');
//     elem.textContent = 'start';
//     data.forEach((item, i) => {
//         if (i == 0) {
//             item.append(elem);
//         } 
//     })
    
//  }


function collector(selector) {
    const elements = document.querySelectorAll(selector);
    let a = null;
    elements.forEach((item, i) => {
        if (i === 0) {
            a = i;
        } 
        return a
    })
}



function checked() {
    console.log(arr);
}

function render(data) {
    data.forEach(item => {
        mainUl.append(item.item());
    });
    
}


