
const dqs = (text, index) => {
    if (index === 'all') {
        const element = document.querySelectorAll(text);
        return element;
    } else {
        const element = document.querySelector(text);
        return element;
    }
}

const control = {
    parent: dqs('.list'),
    mainButton: dqs('[data-add]'),
    mainInput: dqs('input'),
    ul: dqs('ul'),
    deleteList: dqs('.list-item__button-remove', 'all'),
}

function resetMainInputValue(data) {
    data.value = '';
}


export {control, resetMainInputValue};