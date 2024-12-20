
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
    btn : dqs('[data-add]'),
    input : dqs('input'),
    ul : dqs('ul'),
    deleteList : dqs('[data-list-remove]', 'all'),

    resetInputValue: function() {
        this.input.value = '';
    },

    errorInputValue: function() {
        const error = document.createElement('div');
        error.textContent = 'You not text intup';
        this.ul.append(error);
    }
}




export default control;