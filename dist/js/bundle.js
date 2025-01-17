/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/list-item.js":
/*!*************************************!*\
  !*** ./src/js/modules/list-item.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");


class List {

    arr = _script__WEBPACK_IMPORTED_MODULE_0__.arr;

    constructor(tegName, text) {
        this.tegName = tegName;
        this.text = text;

    }

 
    item() {
        const teg = document.createElement(this.tegName);
        teg.className = 'list-item';
        teg.innerHTML = `
                  <span>${this.text}</span>
                <button>&darr;</button>
                <button>Add Sublist</button>
                <button data-remove>Remove</button>
                `;
        return teg;
    }

     
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arr: () => (/* binding */ arr)
/* harmony export */ });
/* harmony import */ var _modules_list_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/list-item */ "./src/js/modules/list-item.js");


const mainUl = document.querySelector('[data-main-ul]');
const mainInput = document.querySelector('[data-main-input]');
const mainButton = document.querySelector('[data-main-button]');
const arr = [];

mainButton.addEventListener('click', () => {
    const a = new _modules_list_item__WEBPACK_IMPORTED_MODULE_0__["default"]('li', mainInput.value).item();
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map