var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),a=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return c.Date.now()};function p(t,e,n){var o,r,i,u,f,c,a=0,p=!1,b=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,i=r;return o=r=void 0,a=e,u=t.apply(i,n)}function j(t){return a=t,f=setTimeout(x,e),p?g(t):u}function h(t){var n=t-c;return void 0===c||n>=e||n<0||b&&t-a>=i}function x(){var t=d();if(h(t))return T(t);f=setTimeout(x,function(t){var n=e-(t-c);return b?s(n,i-(t-a)):n}(t))}function T(t){return f=void 0,m&&o?g(t):(o=r=void 0,u)}function w(){var t=d(),n=h(t);if(o=arguments,r=this,c=t,n){if(void 0===f)return j(c);if(b)return f=setTimeout(x,e),g(c)}return void 0===f&&(f=setTimeout(x,e)),u}return e=y(e)||0,v(n)&&(p=!!n.leading,i=(b="maxWait"in n)?l(y(n.maxWait)||0,e):i,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=r=f=void 0},w.flush=function(){return void 0===f?u:T(d())},w}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==a.call(t)}(t))return NaN;if(v(t)){var u="function"==typeof t.valueOf?t.valueOf():t;t=v(u)?u+"":u}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var f=o.test(t);return f||r.test(t)?i(t.slice(2),f?2:8):n.test(t)?NaN:+t}const b={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")},{form:m,input:g,textarea:j}=b;m.addEventListener("input",(function(t){const e=t.target;t.preventDefault(),console.log(e)}));
//# sourceMappingURL=03-feedback.3731415b.js.map
