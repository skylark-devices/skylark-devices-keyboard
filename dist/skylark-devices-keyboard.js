/**
 * skylark-devices-keyboard - The keyboard  utility library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(e,s){var t=s.define,require=s.require,r="function"==typeof t&&t.amd,n=!r&&"undefined"!=typeof exports;if(!r&&!t){var i={};t=s.define=function(e,s,t){"function"==typeof t?(i[e]={factory:t,deps:s.map(function(s){return function(e,s){if("."!==e[0])return e;var t=s.split("/"),r=e.split("/");t.pop();for(var n=0;n<r.length;n++)"."!=r[n]&&(".."==r[n]?t.pop():t.push(r[n]));return t.join("/")}(s,e)}),resolved:!1,exports:null},require(e)):i[e]={factory:null,resolved:!0,exports:t}},require=s.require=function(e){if(!i.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var module=i[e];if(!module.resolved){var t=[];module.deps.forEach(function(e){t.push(require(e))}),module.exports=module.factory.apply(s,t)||null,module.resolved=!0}return module.exports}}if(!t)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,require){e("skylark-devices-keyboard/keyboard",["skylark-langx-ns"],function(e){var s={isShiftDown:function(e){return null!=e&&e.shiftKey},isAltDown:function(e){return null!=e&&e.altKey},isControlDown:function(e){return null!=e&&e.ctrlKey},isMetaDown:function(e){return null!=e&&e.metaKey},TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,CAPS_LOCK:20,ESC:27,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,INSERT:45,DEL:46,LEFT:37,RIGHT:39,UP:38,DOWN:40,NUM0:48,NUM1:49,NUM2:50,NUM3:51,NUM4:52,NUM5:53,NUM6:54,NUM7:55,NUM8:56,NUM9:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123};return e.attach("devices.keyboard",s)}),e("skylark-devices-keyboard/Key",["skylark-langx-klass","./keyboard"],function(e,s){"use strict";var t=e({_construct:function(){this.pressed=!1,this.justPressed=!1,this.justReleased=!1},update:function(e){this.justPressed=!1,this.justReleased=!1,e===t.DOWN?(!1===this.pressed&&(this.justPressed=!0),this.pressed=!0):e===t.UP?(this.pressed&&(this.justReleased=!0),this.pressed=!1):e===t.RESET&&(this.justReleased=!1,this.justPressed=!1)},set:function(e,s,t){this.justPressed=e,this.pressed=s,this.justReleased=t},reset:function(){this.justPressed=!1,this.pressed=!1,this.justReleased=!1}});return t.DOWN=-1,t.UP=1,t.RESET=0,s.Key=t}),e("skylark-devices-keyboard/Monitor",["skylark-langx-klass","./keyboard","./Key"],function(e,s,t){"use strict";var r=e({_construct:function(e){this.keys=[],this.actions=[];var s=this,r=this.actions;this.handlers={keydown:function(e){r.push(e.keyCode),r.push(t.DOWN)},keyup:function(e){r.push(e.keyCode),r.push(t.UP)},focus:function(e){s.reset()}},!0!==e&&this.create()},update:function(){for(var e=0;this.actions.length>e;){var s=this.actions.shift(),r=this.actions.shift();void 0===this.keys[s]&&(this.keys[s]=new t),this.keys[s].update(r),(this.keys[s].justReleased||this.keys[s].justPressed)&&(this.actions.push(s),this.actions.push(t.RESET),e+=2)}},reset:function(){for(var e=0;e<this.keys.length;e++)void 0!==this.keys[e]&&this.keys[e].reset()},keyPressed:function(e){return void 0!==this.keys[e]&&this.keys[e].pressed},keyJustPressed:function(e){return void 0!==this.keys[e]&&this.keys[e].justPressed},keyJustReleased:function(e){return void 0!==this.keys[e]&&this.keys[e].justReleased},create:function(){for(var e in this.handlers)window.addEventListener(e,this.handlers[e])},dispose:function(){for(var e in this.handlers)window.removeEventListener(e,this.handlers[e])}});return s.Monitor=r}),e("skylark-devices-keyboard/main",["./keyboard","./Key","./Monitor"],function(e){return e}),e("skylark-devices-keyboard",["skylark-devices-keyboard/main"],function(e){return e})}(t),!r){var o=require("skylark-langx-ns");n?module.exports=o:s.skylarkjs=o}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-devices-keyboard.js.map