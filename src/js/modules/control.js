
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
    btn : dqs('[data-add]'),
    input : dqs('input'),
    ul : dqs('ul'),
    deleteList : dqs('[data-list-remove]', 'all'),

    reset: function() {
        this.input.value = '';
    },

    error: function() {
        console.log('error list');
    }
}




export default control;