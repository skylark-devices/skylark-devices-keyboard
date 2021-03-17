/**
 * skylark-devices-keyboard - The keyboard  utility library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-types","./keyboard","./aliases","./codes","./names"],function(e,r,i,n,s){return r.isEventKey=function(r,i){var s=r.which||r.keyCode||r.charCode;if(null===s||void 0===s)return!1;if(e.isString(i)){var a;if(a=n[i.toLowerCase()])return a===s;if(a=aliases[i.toLowerCase()])return a===s}else if(e.isNumber(i))return i===s;return!1}});
//# sourceMappingURL=sourcemaps/isEventKey.js.map
