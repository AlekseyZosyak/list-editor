/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/control.js":
/*!***********************************!*\
  !*** ./src/js/modules/control.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (control);

/***/ }),

/***/ "./src/js/modules/list-app.js":
/*!************************************!*\
  !*** ./src/js/modules/list-app.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control */ "./src/js/modules/control.js");


class ListItem {
    constructor(text, parent, control) {
        this.text = text;
        this.parent = parent;
        this.control = control;
    }

    add() {
        const li = document.createElement('li');
        li.classList.add('list-item');
        li.innerHTML = `
                    <span class="list-item__text">${this.text}</span>
                    <button class="list-item__button-add-sublist">add sublist</button>
                    <button class="list-item__button-remove" data-list-remove>remove</button>`;
        this.parent.append(li)
    } 

    removeList() {
        const {parent} = _control__WEBPACK_IMPORTED_MODULE_0__["default"];

        const items = document.querySelectorAll('.list-item');
        items.forEach((item, i) => {
            item.remove()
        })
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/control */ "./src/js/modules/control.js");
/* harmony import */ var _modules_list_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/list-app */ "./src/js/modules/list-app.js");



window.addEventListener('DOMContentLoaded', () => {
    const {input, ul, btn, deleteList, parent} = _modules_control__WEBPACK_IMPORTED_MODULE_0__["default"];

    btn.addEventListener('click', () => {
        if (input.value != null && input.value != '') {
            new _modules_list_app__WEBPACK_IMPORTED_MODULE_1__["default"](input.value, ul).add();
            _modules_control__WEBPACK_IMPORTED_MODULE_0__["default"].resetInputValue();
        } else {
            _modules_control__WEBPACK_IMPORTED_MODULE_0__["default"].errorInputValue();
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
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map