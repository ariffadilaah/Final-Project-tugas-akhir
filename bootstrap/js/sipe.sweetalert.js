!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Sweetalert2=t()}(this,function(){"use strict";var e={title:"",titleText:"",text:"",html:"",type:null,toast:!1,customClass:"",target:"body",backdrop:!0,animation:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:"#3085d6",confirmButtonClass:null,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:"#aaa",cancelButtonClass:null,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",imageClass:null,timer:null,width:500,padding:20,background:"#fff",input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:null,inputAttributes:{},inputValidator:null,grow:!1,position:"center",progressSteps:[],currentProgressStep:null,progressStepsDistance:"40px",onBeforeOpen:null,onOpen:null,onClose:null,useRejections:!1,expectRejections:!1},t=["useRejections","expectRejections"],n=function(e){var t={};for(var n in e)t[e[n]]="swal2-"+e[n];return t},o=n(["container","shown","iosfix","popup","modal","no-backdrop","toast","toast-shown","overlay","fade","show","hide","noanimation","close","title","content","contentwrapper","buttonswrapper","confirm","cancel","icon","image","input","has-input","file","range","select","radio","checkbox","textarea","inputerror","validationerror","progresssteps","activeprogressstep","progresscircle","progressline","loading","styled","top","top-left","top-right","center","center-left","center-right","bottom","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen"]),r=n(["success","warning","info","question","error"]),i="SweetAlert2:",a=function(e,t){(e=String(e).replace(/[^0-9a-f]/gi,"")).length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;for(var n="#",o=0;o<3;o++){var r=parseInt(e.substr(2*o,2),16);n+=("00"+(r=Math.round(Math.min(Math.max(0,r+r*t),255)).toString(16))).substr(r.length)}return n},s=function(e){return void 0!==e},l=function(e){console.warn(i+" "+e)},u=function(e){console.error(i+" "+e)},c=[],d=function(e){-1===c.indexOf(e)&&(c.push(e),l(e))},p={previousActiveElement:null,previousBodyPadding:null},f=function(){return"undefined"==typeof window||"undefined"==typeof document},m=function(e){var t=h();t&&(t.parentNode.removeChild(t),O(document.body,o["no-backdrop"]),O(document.body,o["has-input"]),O(document.body,o["toast-shown"]));{if(!f()){var n=document.createElement("div");n.className=o.container,n.innerHTML=b;("string"==typeof e.target?document.querySelector(e.target):e.target).appendChild(n);var r=g(),i=N(r,o.input),a=N(r,o.file),s=r.querySelector("."+o.range+" input"),l=r.querySelector("."+o.range+" output"),c=N(r,o.select),d=r.querySelector("."+o.checkbox+" input"),p=N(r,o.textarea);r.setAttribute("aria-live",e.toast?"polite":"assertive");var m=function(){$.isVisible()&&$.resetValidationError()};return i.oninput=m,a.onchange=m,c.onchange=m,d.onchange=m,p.oninput=m,s.oninput=function(){m(),l.value=s.value},s.onchange=function(){m(),s.previousSibling.value=s.value},r}u("SweetAlert2 requires document to initialize")}},b=('\n <div role="dialog" aria-modal="true" aria-labelledby="'+o.title+'" aria-describedby="'+o.content+'" class="'+o.popup+'" tabindex="-1">\n   <ul class="'+o.progresssteps+'"></ul>\n   <div class="'+o.icon+" "+r.error+'">\n     <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n   </div>\n   <div class="'+o.icon+" "+r.question+'">?</div>\n   <div class="'+o.icon+" "+r.warning+'">!</div>\n   <div class="'+o.icon+" "+r.info+'">i</div>\n   <div class="'+o.icon+" "+r.success+'">\n     <div class="swal2-success-circular-line-left"></div>\n     <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n     <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n     <div class="swal2-success-circular-line-right"></div>\n   </div>\n   <img class="'+o.image+'" />\n   <div class="'+o.contentwrapper+'">\n   <h2 class="'+o.title+'" id="'+o.title+'"></h2>\n   <div id="'+o.content+'" class="'+o.content+'"></div>\n   </div>\n   <input class="'+o.input+'" />\n   <input type="file" class="'+o.file+'" />\n   <div class="'+o.range+'">\n     <output></output>\n     <input type="range" />\n   </div>\n   <select class="'+o.select+'"></select>\n   <div class="'+o.radio+'"></div>\n   <label for="'+o.checkbox+'" class="'+o.checkbox+'">\n     <input type="checkbox" />\n   </label>\n   <textarea class="'+o.textarea+'"></textarea>\n   <div class="'+o.validationerror+'" id="'+o.validationerror+'"></div>\n   <div class="'+o.buttonswrapper+'">\n     <button type="button" class="'+o.confirm+'">OK</button>\n     <button type="button" class="'+o.cancel+'">Cancel</button>\n   </div>\n   <button type="button" class="'+o.close+'">×</button>\n </div>\n').replace(/(^|\n)\s*/g,""),h=function(){return document.body.querySelector("."+o.container)},g=function(){return h()?h().querySelector("."+o.popup):null},v=function(e){return h()?h().querySelector("."+e):null},y=function(){return v(o.title)},w=function(){return v(o.content)},C=function(){return v(o.image)},x=function(){return v(o.progresssteps)},k=function(){return v(o.validationerror)},S=function(){return v(o.confirm)},A=function(){return v(o.cancel)},B=function(){return v(o.buttonswrapper)},P=function(){return v(o.close)},E=function(){var e=Array.from(g().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(e,t){return e=parseInt(e.getAttribute("tabindex")),t=parseInt(t.getAttribute("tabindex")),e>t?1:e<t?-1:0}),t=Array.prototype.slice.call(g().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]'));return function(e){var t=[];for(var n in e)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(e.concat(t))},L=function(){return!document.body.classList.contains(o["toast-shown"])},T=function(e,t){return!!e.classList&&e.classList.contains(t)},q=function(e){if(e.focus(),"file"!==e.type){var t=e.value;e.value="",e.value=t}},V=function(e,t){if(e&&t){t.split(/\s+/).filter(Boolean).forEach(function(t){e.classList.add(t)})}},O=function(e,t){if(e&&t){t.split(/\s+/).filter(Boolean).forEach(function(t){e.classList.remove(t)})}},N=function(e,t){for(var n=0;n<e.childNodes.length;n++)if(T(e.childNodes[n],t))return e.childNodes[n]},j=function(e,t){t||(t=e===g()||e===B()?"flex":"block"),e.style.opacity="",e.style.display=t},M=function(e){e.style.opacity="",e.style.display="none"},H=function(e){return e.offsetWidth||e.offsetHeight||e.getClientRects().length},R=function(){if(f())return!1;var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in t)if(t.hasOwnProperty(n)&&s(e.style[n]))return t[n];return!1}(),I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},U=D({},e),W=[],z=void 0,K=void 0;s(Promise)||u("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/limonte/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)");var Z=function(e){for(var t in e)$.isValidParameter(t)||l('Unknown parameter "'+t+'"'),$.isDeprecatedParameter(t)&&d('The parameter "'+t+'" is deprecated and will be removed in the next major release.')},Q=function(t){("string"==typeof t.target&&!document.querySelector(t.target)||"string"!=typeof t.target&&!t.target.appendChild)&&(l('Target parameter is not valid, defaulting to "body"'),t.target="body");var n=void 0,i=g(),a="string"==typeof t.target?document.querySelector(t.target):t.target;n=i&&a&&i.parentNode!==a.parentNode?m(t):i||m(t);var s=t.width===e.width&&t.toast?"auto":t.width;n.style.width="number"==typeof s?s+"px":s;var c=t.padding===e.padding&&t.toast?"inherit":t.padding;n.style.padding="number"==typeof c?c+"px":c,n.style.background=t.background;for(var d=n.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),p=0;p<d.length;p++)d[p].style.background=t.background;var f=h(),b=y(),v=w(),k=B(),E=S(),L=A(),T=P();if(t.titleText?b.innerText=t.titleText:b.innerHTML=t.title.split("\n").join("<br />"),t.backdrop||V(document.body,o["no-backdrop"]),t.text||t.html){if("object"===I(t.html))if(v.innerHTML="",0 in t.html)for(var q=0;q in t.html;q++)v.appendChild(t.html[q].cloneNode(!0));else v.appendChild(t.html.cloneNode(!0));else t.html?v.innerHTML=t.html:t.text&&(v.textContent=t.text);j(v)}else M(v);if(t.position in o&&V(f,o[t.position]),t.grow&&"string"==typeof t.grow){var N="grow-"+t.grow;N in o&&V(f,o[N])}t.showCloseButton?(T.setAttribute("aria-label",t.closeButtonAriaLabel),j(T)):M(T),n.className=o.popup,t.toast?(V(document.body,o["toast-shown"]),V(n,o.toast)):V(n,o.modal),t.customClass&&V(n,t.customClass);var H=x(),R=parseInt(null===t.currentProgressStep?$.getQueueStep():t.currentProgressStep,10);t.progressSteps.length?(j(H),function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(H),R>=t.progressSteps.length&&l("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),t.progressSteps.forEach(function(e,n){var r=document.createElement("li");if(V(r,o.progresscircle),r.innerHTML=e,n===R&&V(r,o.activeprogressstep),H.appendChild(r),n!==t.progressSteps.length-1){var i=document.createElement("li");V(i,o.progressline),i.style.width=t.progressStepsDistance,H.appendChild(i)}})):M(H);for(var D=g().querySelectorAll("."+o.icon),U=0;U<D.length;U++)M(D[U]);if(t.type){var W=!1;for(var z in r)if(t.type===z){W=!0;break}if(!W)return u("Unknown alert type: "+t.type),!1;var K=n.querySelector("."+o.icon+"."+r[t.type]);if(j(K),t.animation)switch(t.type){case"success":V(K,"swal2-animate-success-icon"),V(K.querySelector(".swal2-success-line-tip"),"swal2-animate-success-line-tip"),V(K.querySelector(".swal2-success-line-long"),"swal2-animate-success-line-long");break;case"error":V(K,"swal2-animate-error-icon"),V(K.querySelector(".swal2-x-mark"),"swal2-animate-x-mark")}}var Z=C();t.imageUrl?(Z.setAttribute("src",t.imageUrl),Z.setAttribute("alt",t.imageAlt),j(Z),t.imageWidth?Z.setAttribute("width",t.imageWidth):Z.removeAttribute("width"),t.imageHeight?Z.setAttribute("height",t.imageHeight):Z.removeAttribute("height"),Z.className=o.image,t.imageClass&&V(Z,t.imageClass)):M(Z),t.showCancelButton?L.style.display="inline-block":M(L),t.showConfirmButton?function(e,t){e.style.removeProperty?e.style.removeProperty(t):e.style.removeAttribute(t)}(E,"display"):M(E),t.showConfirmButton||t.showCancelButton?j(k):M(k),E.innerHTML=t.confirmButtonText,L.innerHTML=t.cancelButtonText,E.setAttribute("aria-label",t.confirmButtonAriaLabel),L.setAttribute("aria-label",t.cancelButtonAriaLabel),t.buttonsStyling&&(E.style.backgroundColor=t.confirmButtonColor,L.style.backgroundColor=t.cancelButtonColor),E.className=o.confirm,V(E,t.confirmButtonClass),L.className=o.cancel,V(L,t.cancelButtonClass),t.buttonsStyling?(V(E,o.styled),V(L,o.styled)):(O(E,o.styled),O(L,o.styled),E.style.backgroundColor=E.style.borderLeftColor=E.style.borderRightColor="",L.style.backgroundColor=L.style.borderLeftColor=L.style.borderRightColor=""),!0===t.animation?O(n,o.noanimation):V(n,o.noanimation),t.showLoaderOnConfirm&&!t.preConfirm&&l("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://limonte.github.io/sweetalert2/#ajax-request")},Y=function(){null===p.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(p.previousBodyPadding=document.body.style.paddingRight,document.body.style.paddingRight=function(){if("ontouchstart"in window||navigator.msMaxTouchPoints)return 0;var e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}()+"px")},_=function(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!T(document.body,o.iosfix)){var e=document.body.scrollTop;document.body.style.top=-1*e+"px",V(document.body,o.iosfix)}},$=function e(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];if(s(window)){if(!s(n[0]))return u("SweetAlert2 expects at least 1 attribute!"),!1;var i=D({},U);switch(I(n[0])){case"string":i.title=n[0],i.html=n[1],i.type=n[2];break;case"object":if(Z(n[0]),D(i,n[0]),i.extraParams=n[0].extraParams,"email"===i.input&&null===i.inputValidator){var l=function(e){return new Promise(function(t,n){/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?t():n("Invalid email address")})};i.inputValidator=i.expectRejections?l:e.adaptInputValidator(l)}if("url"===i.input&&null===i.inputValidator){var c=function(e){return new Promise(function(t,n){/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e)?t():n("Invalid URL")})};i.inputValidator=i.expectRejections?c:e.adaptInputValidator(c)}break;default:return u('Unexpected type of argument! Expected "string" or "object", got '+I(n[0])),!1}Q(i);var d=h(),f=g();return new Promise(function(t,n){var r=function(n){e.closePopup(i.onClose),t(i.useRejections?n:{value:n})},s=function(o){e.closePopup(i.onClose),i.useRejections?n(o):t({dismiss:o})},l=function(t){e.closePopup(i.onClose),n(t)};i.timer&&(f.timeout=setTimeout(function(){return s("timer")},i.timer));var c=function(e){if(!(e=e||i.input))return null;switch(e){case"select":case"textarea":case"file":return N(f,o[e]);case"checkbox":return f.querySelector("."+o.checkbox+" input");case"radio":return f.querySelector("."+o.radio+" input:checked")||f.querySelector("."+o.radio+" input:first-child");case"range":return f.querySelector("."+o.range+" input");default:return N(f,o.input)}};i.input&&setTimeout(function(){var e=c();e&&q(e)},0);for(var m=function(t){if(i.showLoaderOnConfirm&&e.showLoading(),i.preConfirm){e.resetValidationError();var n=Promise.resolve().then(function(){return i.preConfirm(t,i.extraParams)});i.expectRejections?n.then(function(e){return r(e||t)},function(t){e.hideLoading(),t&&e.showValidationError(t)}):n.then(function(n){H(k())?e.hideLoading():r(n||t)},function(e){return l(e)})}else r(t)},b=function(t){var n=t||window.event,o=n.target||n.srcElement,r=S(),u=A(),d=r&&(r===o||r.contains(o)),p=u&&(u===o||u.contains(o));switch(n.type){case"mouseover":case"mouseup":i.buttonsStyling&&(d?r.style.backgroundColor=a(i.confirmButtonColor,-.1):p&&(u.style.backgroundColor=a(i.cancelButtonColor,-.1)));break;case"mouseout":i.buttonsStyling&&(d?r.style.backgroundColor=i.confirmButtonColor:p&&(u.style.backgroundColor=i.cancelButtonColor));break;case"mousedown":i.buttonsStyling&&(d?r.style.backgroundColor=a(i.confirmButtonColor,-.2):p&&(u.style.backgroundColor=a(i.cancelButtonColor,-.2)));break;case"click":if(d&&e.isVisible())if(e.disableButtons(),i.input){var f=function(){var e=c();if(!e)return null;switch(i.input){case"checkbox":return e.checked?1:0;case"radio":return e.checked?e.value:null;case"file":return e.files.length?e.files[0]:null;default:return i.inputAutoTrim?e.value.trim():e.value}}();if(i.inputValidator){e.disableInput();var b=Promise.resolve().then(function(){return i.inputValidator(f,i.extraParams)});i.expectRejections?b.then(function(){e.enableButtons(),e.enableInput(),m(f)},function(t){e.enableButtons(),e.enableInput(),t&&e.showValidationError(t)}):b.then(function(t){e.enableButtons(),e.enableInput(),t?e.showValidationError(t):m(f)},function(e){return l(e)})}else m(f)}else m(!0);else p&&e.isVisible()&&(e.disableButtons(),s("cancel"))}},v=f.querySelectorAll("button"),D=0;D<v.length;D++)v[D].onclick=b,v[D].onmouseover=b,v[D].onmouseout=b,v[D].onmousedown=b;P().onclick=function(){s("close")},i.toast?f.onclick=function(t){t.target!==f||i.showConfirmButton||i.showCancelButton||i.allowOutsideClick&&(e.closePopup(i.onClose),s("overlay"))}:d.onclick=function(e){e.target===d&&i.allowOutsideClick&&s("overlay")};var U=B(),W=S(),Z=A();i.reverseButtons?W.parentNode.insertBefore(Z,W):W.parentNode.insertBefore(W,Z);var $=function(e,t){for(var n=E(i.focusCancel),o=0;o<n.length;o++){(e+=t)===n.length?e=0:-1===e&&(e=n.length-1);var r=n[e];if(H(r))return r.focus()}};i.toast&&K&&(window.onkeydown=z,K=!1),i.toast||K||(z=window.onkeydown,K=!0,window.onkeydown=function(t){var n=t||window.event;if("Enter"!==n.key||n.isComposing)if("Tab"===n.key){for(var o=n.target||n.srcElement,r=E(i.focusCancel),a=-1,l=0;l<r.length;l++)if(o===r[l]){a=l;break}n.shiftKey?$(a,-1):$(a,1),n.stopPropagation(),n.preventDefault()}else-1!==["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"].indexOf(n.key)?document.activeElement===W&&H(Z)?Z.focus():document.activeElement===Z&&H(W)&&W.focus():"Escape"!==n.key&&"Esc"!==n.key||!0!==i.allowEscapeKey||s("esc");else if(n.target===c()){if("textarea"===n.target.tagName.toLowerCase())return;e.clickConfirm(),n.preventDefault()}}),i.buttonsStyling&&(W.style.borderLeftColor=i.confirmButtonColor,W.style.borderRightColor=i.confirmButtonColor),e.hideLoading=e.disableLoading=function(){i.showConfirmButton||(M(W),i.showCancelButton||M(B())),O(U,o.loading),O(f,o.loading),f.removeAttribute("aria-busy"),W.disabled=!1,Z.disabled=!1},e.getTitle=function(){return y()},e.getContent=function(){return w()},e.getInput=function(){return c()},e.getImage=function(){return C()},e.getButtonsWrapper=function(){return B()},e.getConfirmButton=function(){return S()},e.getCancelButton=function(){return A()},e.enableButtons=function(){W.disabled=!1,Z.disabled=!1},e.disableButtons=function(){W.disabled=!0,Z.disabled=!0},e.enableConfirmButton=function(){W.disabled=!1},e.disableConfirmButton=function(){W.disabled=!0},e.enableInput=function(){var e=c();if(!e)return!1;if("radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!1;else e.disabled=!1},e.disableInput=function(){var e=c();if(!e)return!1;if(e&&"radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!0;else e.disabled=!0},e.showValidationError=function(e){var t=k();t.innerHTML=e,j(t);var n=c();n&&(n.setAttribute("aria-invalid",!0),n.setAttribute("aria-describedBy",o.validationerror),q(n),V(n,o.inputerror))},e.resetValidationError=function(){var e=k();M(e);var t=c();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedBy"),O(t,o.inputerror))},e.getProgressSteps=function(){return i.progressSteps},e.setProgressSteps=function(e){i.progressSteps=e,Q(i)},e.showProgressSteps=function(){j(x())},e.hideProgressSteps=function(){M(x())},e.enableButtons(),e.hideLoading(),e.resetValidationError(),i.input&&V(document.body,o["has-input"]);for(var J=["input","file","range","select","radio","checkbox","textarea"],X=void 0,F=0;F<J.length;F++){var G=o[J[F]],ee=N(f,G);if(X=c(J[F])){for(var te in X.attributes)if(X.attributes.hasOwnProperty(te)){var ne=X.attributes[te].name;"type"!==ne&&"value"!==ne&&X.removeAttribute(ne)}for(var oe in i.inputAttributes)X.setAttribute(oe,i.inputAttributes[oe])}ee.className=G,i.inputClass&&V(ee,i.inputClass),M(ee)}var re=void 0;switch(i.input){case"text":case"email":case"password":case"number":case"tel":case"url":(X=N(f,o.input)).value=i.inputValue,X.placeholder=i.inputPlaceholder,X.type=i.input,j(X);break;case"file":(X=N(f,o.file)).placeholder=i.inputPlaceholder,X.type=i.input,j(X);break;case"range":var ie=N(f,o.range),ae=ie.querySelector("input"),se=ie.querySelector("output");ae.value=i.inputValue,ae.type=i.input,se.value=i.inputValue,j(ie);break;case"select":var le=N(f,o.select);if(le.innerHTML="",i.inputPlaceholder){var ue=document.createElement("option");ue.innerHTML=i.inputPlaceholder,ue.value="",ue.disabled=!0,ue.selected=!0,le.appendChild(ue)}re=function(e){for(var t in e){var n=document.createElement("option");n.value=t,n.innerHTML=e[t],i.inputValue.toString()===t&&(n.selected=!0),le.appendChild(n)}j(le),le.focus()};break;case"radio":var ce=N(f,o.radio);ce.innerHTML="",re=function(e){for(var t in e){var n=document.createElement("input"),r=document.createElement("label"),a=document.createElement("span");n.type="radio",n.name=o.radio,n.value=t,i.inputValue.toString()===t&&(n.checked=!0),a.innerHTML=e[t],r.appendChild(n),r.appendChild(a),r.for=n.id,ce.appendChild(r)}j(ce);var s=ce.querySelectorAll("input");s.length&&s[0].focus()};break;case"checkbox":var de=N(f,o.checkbox),pe=c("checkbox");pe.type="checkbox",pe.value=1,pe.id=o.checkbox,pe.checked=Boolean(i.inputValue);var fe=de.getElementsByTagName("span");fe.length&&de.removeChild(fe[0]),(fe=document.createElement("span")).innerHTML=i.inputPlaceholder,de.appendChild(fe),j(de);break;case"textarea":var me=N(f,o.textarea);me.value=i.inputValue,me.placeholder=i.inputPlaceholder,j(me);break;case null:break;default:u('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'+i.input+'"')}"select"!==i.input&&"radio"!==i.input||(i.inputOptions instanceof Promise?(e.showLoading(),i.inputOptions.then(function(t){e.hideLoading(),re(t)})):"object"===I(i.inputOptions)?re(i.inputOptions):u("Unexpected type of inputOptions! Expected object or Promise, got "+I(i.inputOptions))),function(e,t,n){var r=h(),i=g();null!==t&&"function"==typeof t&&t(i),e?(V(i,o.show),V(r,o.fade),O(i,o.hide)):O(i,o.fade),j(i),r.style.overflowY="hidden",R&&!T(i,o.noanimation)?i.addEventListener(R,function e(){i.removeEventListener(R,e),r.style.overflowY="auto"}):r.style.overflowY="auto",V(document.documentElement,o.shown),V(document.body,o.shown),V(r,o.shown),L()&&(Y(),_()),p.previousActiveElement=document.activeElement,null!==n&&"function"==typeof n&&setTimeout(function(){n(i)})}(i.animation,i.onBeforeOpen,i.onOpen),i.toast||(i.allowEnterKey?i.focusCancel&&H(Z)?Z.focus():i.focusConfirm&&H(W)?W.focus():$(-1,1):document.activeElement&&document.activeElement.blur()),h().scrollTop=0})}};return $.isVisible=function(){return!!g()},$.queue=function(e){W=e;var t=function(){W=[],document.body.removeAttribute("data-swal2-queue-step")},n=[];return new Promise(function(e,o){!function o(r,i){r<W.length?(document.body.setAttribute("data-swal2-queue-step",r),$(W[r]).then(function(a){s(a.value)?(n.push(a.value),o(r+1,i)):(t(),e({dismiss:a.dismiss}))})):(t(),e({value:n}))}(0)})},$.getQueueStep=function(){return document.body.getAttribute("data-swal2-queue-step")},$.insertQueueStep=function(e,t){return t&&t<W.length?W.splice(t,0,e):W.push(e)},$.deleteQueueStep=function(e){s(W[e])&&W.splice(e,1)},$.close=$.closePopup=$.closeModal=$.closeToast=function(e){var t=h(),n=g();if(n){O(n,o.show),V(n,o.hide),clearTimeout(n.timeout),document.body.classList.contains(o["toast-shown"])||(!function(){if(p.previousActiveElement&&p.previousActiveElement.focus){var e=window.scrollX,t=window.scrollY;p.previousActiveElement.focus(),s(e)&&s(t)&&window.scrollTo(e,t)}}(),window.onkeydown=z,K=!1);var r=function(){t.parentNode&&t.parentNode.removeChild(t),O(document.documentElement,o.shown),O(document.body,o.shown),O(document.body,o["no-backdrop"]),O(document.body,o["has-input"]),O(document.body,o["toast-shown"]),L()&&(null!==p.previousBodyPadding&&(document.body.style.paddingRight=p.previousBodyPadding,p.previousBodyPadding=null),function(){if(T(document.body,o.iosfix)){var e=parseInt(document.body.style.top,10);O(document.body,o.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}}())};R&&!T(n,o.noanimation)?n.addEventListener(R,function e(){n.removeEventListener(R,e),T(n,o.hide)&&r()}):r(),null!==e&&"function"==typeof e&&setTimeout(function(){e(n)})}},$.clickConfirm=function(){return S().click()},$.clickCancel=function(){return A().click()},$.showLoading=$.enableLoading=function(){var e=g();e||$(""),e=g();var t=B(),n=S(),r=A();j(t),j(n,"inline-block"),V(t,o.loading),V(e,o.loading),n.disabled=!0,r.disabled=!0,e.setAttribute("aria-busy",!0),e.focus()},$.isValidParameter=function(t){return e.hasOwnProperty(t)||"extraParams"===t},$.isDeprecatedParameter=function(e){return-1!==t.indexOf(e)},$.setDefaults=function(e){if(!e||"object"!==(void 0===e?"undefined":I(e)))return u("the argument for setDefaults() is required and has to be a object");Z(e);for(var t in e)$.isValidParameter(t)&&(U[t]=e[t])},$.resetDefaults=function(){U=D({},e)},$.adaptInputValidator=function(e){return function(t,n){return e.call(this,t,n).then(function(){},function(e){return e})}},$.noop=function(){},$.version="7.0.9",$.default=$,$}),"undefined"!=typeof window&&window.Sweetalert2&&(window.sweetAlert=window.swal=window.Sweetalert2);