(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/frontend-st-cohort-201",headers:{authorization:"f40e6864-64f7-4040-8be8-39754f8a83de","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function n(e,t,n,r,o,c){var a=e.content.querySelector(".places__item").cloneNode(!0),i=a.querySelector(".card__like-count"),u=a.querySelector(".card__image");u.setAttribute("src",n.link),u.setAttribute("alt",n.name),a.querySelector(".card__title").textContent=n.name,i.textContent=n.likes?n.likes.length:0;var l=a.querySelector(".card__delete-button"),s=a.querySelector(".card__like-button"),d=n.likes.some((function(e){return e._id===t}));return t!==n.owner._id?l.style.display="none":l.addEventListener("click",(function(){r(a,n._id)})),d&&s.classList.add("card__like-button_is-active"),s.addEventListener("click",(function(){c(s,n._id,i)})),u.addEventListener("click",(function(){o(n.link,n.name)})),a}function r(n,r){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers}).then(t)})(r).then((function(){n.remove()})).catch((function(e){console.error("Ошибка при удалении карточки:",e)}))}function o(t,n,r){var o=t.classList.contains("card__like-button_is-active");(function(t,n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(t),{method:n?"DELETE":"PUT",headers:e.headers}).then((function(e){if(!e.ok)throw new Error("Ошибка: ".concat(e.status));return e.json()}))})(n,o).then((function(e){t.classList.toggle("card__like-button_is-active",!o),r.textContent=e.likes.length})).catch((function(e){console.error("Ошибка при обновлении лайков:",e)}))}function c(e){e.classList.add("popup_is-opened"),e.addEventListener("mousedown",i),document.addEventListener("keydown",u)}function a(e){e.classList.remove("popup_is-opened"),e.removeEventListener("mousedown",i),document.removeEventListener("keydown",u)}function i(e){e.target===e.currentTarget&&a(e.target)}function u(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}var l=function(e,t,n,r){var o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],c=r.inputErrorClass,a=r.errorClass,i=e.querySelector(".".concat(t.id,"-error"));o?(t.classList.add(c),i.textContent=n,i.classList.add(a)):(t.classList.remove(c),i.textContent="",i.classList.remove(a),t.setCustomValidity(""))},s=function(e,t,n){var r=n.inactiveButtonClass;!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(r)):(t.disabled=!0,t.classList.add(r))},d=function(e,t){var n=t.inputSelector,r=t.inactiveButtonClass,o=t.submitButtonSelector,c=Array.from(e.querySelectorAll(n)),a=e.querySelector(o);c.forEach((function(n){l(e,n,"",t,!1)})),a.classList.add(r),a.disabled=!0};function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var f=document.querySelector("#card-template"),m=document.querySelector(".places__list"),_=document.querySelectorAll(".popup"),y=document.querySelector(".popup_type_edit"),v=document.querySelector(".profile__edit-button"),h=document.querySelector(".profile__title"),b=document.querySelector(".profile__description"),S=document.querySelector(".profile__image"),q=document.forms["edit-profile"],C=q.elements.name,E=q.elements.description,L=document.querySelector(".popup_type_new-card"),g=document.querySelector(".profile__add-button"),k=document.forms["new-place"],x=k.elements["place-name"],A=k.elements.link,w=document.querySelector(".popup_type_image"),U=w.querySelector(".popup__image"),T=w.querySelector(".popup__caption"),j=document.querySelectorAll(".popup__close"),O=document.querySelector(".profile__image-button"),B=document.querySelector(".popup_type_new-avatar"),P=document.forms["new-avatar"],D=P.elements.link,I={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},M="";function N(e,t){U.src=e,U.alt=t,T.textContent=t,c(w)}Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,c,a=(c=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,c)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(t,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],u=a[1];h.textContent=i.name,b.textContent=i.about,S.style.backgroundImage="url(".concat(i.avatar,")"),M=i._id,u.forEach((function(e){var t=n(f,M,e,r,N,o);m.append(t)}))})).catch((function(e){console.error("Ошибка при выполнении запроса:",e),alert("Возникла ошибка. Пожалуйста, попробуйте снова.")})),_.forEach((function(e){e.classList.add("popup_is-animated")})),O.addEventListener("click",(function(){P.reset(),d(P,I),c(B)})),v.addEventListener("click",(function(){C.value=h.textContent,E.value=b.textContent,d(q,I),c(y)})),g.addEventListener("click",(function(){d(k,I),c(L)})),j.forEach((function(e){e.addEventListener("click",(function(e){a(e.target.closest(".popup"))}))})),q.addEventListener("submit",(function(n){n.preventDefault();var r,o,c=q.querySelector(".popup__button");c.textContent="Сохранение...",(r=C.value,o=E.value,fetch("".concat(e.baseUrl,"/users/me "),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then(t)).then((function(e){h.textContent=e.name,b.textContent=e.about,a(y)})).catch((function(e){console.error("Ошибка при выполнении запроса:",e),alert("Возникла ошибка. Пожалуйста, попробуйте снова.")})).finally((function(){c.textContent="Сохранить"}))})),k.addEventListener("submit",(function(c){c.preventDefault();var i,u,l=k.querySelector(".popup__button");l.textContent="Сохранение...",(i=x.value,u=A.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:i,link:u})}).then(t)).then((function(e){var t=n(f,M,e,r,N,o);m.prepend(t),k.reset(),a(L)})).catch((function(e){console.error("Ошибка при выполнении запроса:",e),alert("Возникла ошибка. Пожалуйста, попробуйте снова.")})).finally((function(){l.textContent="Сохранить"}))})),P.addEventListener("submit",(function(n){n.preventDefault();var r,o=P.querySelector(".popup__button");o.textContent="Сохранение...",(r=D.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){S.style.backgroundImage="url(".concat(e.avatar,")"),a(B),P.reset()})).catch((function(e){console.error("Ошибка при выполнении запроса:",e),alert("Возникла ошибка. Пожалуйста, попробуйте снова.")})).finally((function(){o.textContent="Сохранить"}))})),function(e){var t=e.formSelector;Array.from(document.querySelectorAll(t)).forEach((function(t){!function(e,t){var n=t.inputSelector,r=t.submitButtonSelector,o=Array.from(e.querySelectorAll(n)),c=e.querySelector(r);s(o,c,t),o.forEach((function(n){n.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?l(e,t,"",n,!1):l(e,t,t.validationMessage,n,!0)}(e,n,t),s(o,c,t)}))}))}(t,e)}))}(I)})();