function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return l.Date.now()};function p(e,t,n){var o,r,i,a,f,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(w,t),l?y(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function w(){var e=g();if(h(e))return j(e);f=setTimeout(w,function(e){var n=t-(e-u);return s?m(n,i-(e-c)):n}(e))}function j(e){return f=void 0,p&&o?y(e):(o=r=void 0,a)}function O(){var e=g(),n=h(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(w,t),y(u)}return void 0===f&&(f=setTimeout(w,t)),a}return t=b(t)||0,v(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},O.flush=function(){return void 0===f?a:j(g())},O}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),S=document.querySelector(".feedback-form textarea"),h=document.querySelector(".feedback-form input");y.addEventListener("input",e(t)((function(){const e=new FormData(y);let t={};e.forEach(((e,n)=>t[n]=e)),localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),console.log("sent message with such data:",localStorage.getItem("feedback-form-state")),e.target.reset(),localStorage.removeItem("feedback-form-state")})),function(){const e=localStorage.getItem("feedback-form-state"),t=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);S.value=t.message}if(t){const e=JSON.parse(t);h.value=e.email}}();
//# sourceMappingURL=03-feedback.92485a8b.js.map
