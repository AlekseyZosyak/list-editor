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
/* harmony export */   control: () => (/* binding */ control),
/* harmony export */   resetMainInputValue: () => (/* binding */ resetMainInputValue)
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
    mainButton: dqs('[data-add]'),
    mainInput: dqs('input'),
    ul: dqs('ul'),
    deleteList: dqs('.list-item__button-remove', 'all'),
}

function resetMainInputValue(data) {
    data.mainInput.value = '';
}




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

    listElement() {
        const li = document.createElement('li');
        li.classList.add('list-item');
        li.innerHTML = `
                    <span class="list-item__text">${this.text}</span>
                    <button class="list-item__button-add-sublist">add sublist</button>
                    <button class="list-item__button-remove" data-list-remove>remove</button>`;
        this.parent.append(li)
    }

    subListElement() {
        const ul = document.createElement('ul');
        ul.classList.add('list-item');
        ul.innerHTML = `<li>
                    <div>
                        <input type="text">
                        <button data-add-sublist>add sub list</button>
                    </div>
                    </li>`
        this.parent.append(ul)
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
    const { mainInput, ul, mainButton, deleteList, parent } = _modules_control__WEBPACK_IMPORTED_MODULE_0__.control;

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


    mainButton.addEventListener('click', () => {
        if (mainInput.value != null && mainInput.value != '') {
            new _modules_list_app__WEBPACK_IMPORTED_MODULE_1__["default"](mainInput.value, ul).listElement();
            (0,_modules_control__WEBPACK_IMPORTED_MODULE_0__.resetMainInputValue)(_modules_control__WEBPACK_IMPORTED_MODULE_0__.control);
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

        // add sublist

        if (target && target.classList.contains('list-item__button-add-sublist')) {
            const elements = collectorСollection('.list-item__button-add-sublist');
            elements.forEach((item, i) => {
                if (target == item) {
                   new _modules_list_app__WEBPACK_IMPORTED_MODULE_1__["default"](Text, elements[i]).subListElement();
                }
            });
        }

    })
    
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map