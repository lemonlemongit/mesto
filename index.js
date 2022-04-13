(()=>{"use strict";var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".profile__button-add"),n=document.querySelector(".popup__form"),r=n.querySelector(".popup__input_type_name"),o=n.querySelector(".popup__input_type_profession"),i={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__confirm-button",disabledButtonClass:"popup__confirm-button_disabled",inputErrorClass:"popup__input_visible"};function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._setting=t,this._button=this._form.querySelector(this._setting.submitButtonSelector),this._inputs=Array.from(this._form.querySelectorAll(this._setting.inputSelector))}var t,n;return t=e,(n=[{key:"_setDisableButton",value:function(){this._button.setAttribute("disabled",!0),this._button.classList.add(this._setting.disabledButtonClass)}},{key:"_setActivateButton",value:function(){this._button.removeAttribute("disabled"),this._button.classList.remove(this._setting.disabledButtonClass)}},{key:"checkButtonValidity",value:function(e){this._form.checkValidity()?this._setActivateButton(this._button):this._setDisableButton(this._button)}},{key:"_setInputInvalid",value:function(e,t){e.textContent=t.validationMessage,t.classList.add(this._setting.inputErrorClass)}},{key:"_setInputValid",value:function(e,t){e.textContent="",t.classList.remove(this._setting.inputErrorClass)}},{key:"_checkInputValidity",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.validity.valid?this._setInputValid(t,e):this._setInputInvalid(t,e)}},{key:"_enableInput",value:function(){var e=this;this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.checkButtonValidity(e._button)}))}))}},{key:"enableValidation",value:function(){this.checkButtonValidity(this._button),this._enableInput(this._button)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._cardTemplate=document.querySelector(n),this._handleCardClick=r}var t,n;return t=e,(n=[{key:"createCard",value:function(){return this._templateDate=this._cardTemplate.content.cloneNode(!0),this._templateDate.querySelector(".element__image").setAttribute("style","background-image: url(".concat(this._link,")")),this._templateDate.querySelector(".element__name").textContent=this._name,this._imageZoomValue=this._templateDate.querySelector(".element__image"),this._likeButton=this._templateDate.querySelector(".element__like"),this._setEventListeners(this._templateDate),this._templateDate}},{key:"_setEventListeners",value:function(e){var t=this;e.querySelector(".element__delete").addEventListener("click",this._deleteCard),this._likeButton.addEventListener("click",(function(e){t._likeCard(e)})),this._imageZoomValue.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"_deleteCard",value:function(e){e.target.closest(".element").remove()}},{key:"_likeCard",value:function(){this._likeButton.classList.toggle("element__like_active")}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._renderedItems=r,this._renderer=o}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function v(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".zoom__image"),t._description=t._popup.querySelector(".zoom__image-description"),t}return t=a,(n=[{key:"open",value:function(e,t){this._image.src=t,this._description.textContent=e,b(w(a.prototype),"open",this).call(this)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(y);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},x.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function C(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=t,n._form=n._popup.querySelector(".popup__form"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e,t=function(e){if(Array.isArray(e))return S(e)}(e=this._form.querySelectorAll(".popup__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n={};return t.forEach((function(e){n[e.name]=e.value})),n}},{key:"setEventListeners",value:function(){var e=this;x(B(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues())}))}},{key:"close",value:function(){x(B(a.prototype),"close",this).call(this),this._form.reset()}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(y);function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){var n=t.profileNameSelector,r=t.profileJobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._jobElement=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,job:this._jobElement.textContent}}},{key:"setUserInfo",value:function(e,t){this._nameElement.textContent=e,this._jobElement.textContent=t}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e,t){A.open(e,t)}function I(e){return new l(e,"#template-element",D).createCard()}var V=new f({items:[{name:"Домбай",link:"https://images.unsplash.com/photo-1640763403347-54557b9dbed3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"},{name:"Сундал",link:"https://images.unsplash.com/photo-1643721859448-4d241d04448b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{name:"Нью-Йорк",link:"https://images.unsplash.com/photo-1522092372459-dff01028d904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{name:"Торонто",link:"https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80"},{name:"Мурманск",link:"https://images.unsplash.com/photo-1601291490701-2bdf663581ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"},{name:"Байкал",link:"https://images.unsplash.com/photo-1552588353-5682e06233fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"}],renderer:function(e){var t=I(e);V.addItem(t)}},".elements");V.renderItems();var A=new g(".zoom");A.setEventListeners();var M=new L({profileNameSelector:".profile__name",profileJobSelector:".profile__profession"}),H=new P(".added-block",(function(e){V.addItem(I(e)),H.close()})),R=new P(".edit-block",(function(e){var t=e.names,n=e.professions;M.setUserInfo(t,n),R.close()}));e.addEventListener("click",(function(){var e=M.getUserInfo(),t=e.name,n=e.job;r.value=t,o.value=n,G.checkButtonValidity(),R.open()})),t.addEventListener("click",(function(){T.checkButtonValidity(),H.open()})),H.setEventListeners(),R.setEventListeners();var T=new u(i,document.querySelector(".popup__form_added"));T.enableValidation();var G=new u(i,document.querySelector(".popup__form_edit"));G.enableValidation()})();