/**
 * skylark-devices-keyboard - The keyboard  utility library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-klass","./keyboard","./Key"],function(s,e,t){"use strict";var i=s({_construct:function(s){this.keys=[],this.actions=[];var e=this,i=this.actions;this.handlers={keydown:function(s){i.push(s.keyCode),i.push(t.DOWN)},keyup:function(s){i.push(s.keyCode),i.push(t.UP)},focus:function(s){e.reset()}},!0!==s&&this.create()},update:function(){for(var s=0;this.actions.length>s;){var e=this.actions.shift(),i=this.actions.shift();void 0===this.keys[e]&&(this.keys[e]=new t),this.keys[e].update(i),(this.keys[e].justReleased||this.keys[e].justPressed)&&(this.actions.push(e),this.actions.push(t.RESET),s+=2)}},reset:function(){for(var s=0;s<this.keys.length;s++)void 0!==this.keys[s]&&this.keys[s].reset()},keyPressed:function(s){return void 0!==this.keys[s]&&this.keys[s].pressed},keyJustPressed:function(s){return void 0!==this.keys[s]&&this.keys[s].justPressed},keyJustReleased:function(s){return void 0!==this.keys[s]&&this.keys[s].justReleased},create:function(){for(var s in this.handlers)window.addEventListener(s,this.handlers[s])},dispose:function(){for(var s in this.handlers)window.removeEventListener(s,this.handlers[s])}});return e.Monitor=i});
//# sourceMappingURL=sourcemaps/Monitor.js.map
