/**
 * skylark-devices-keyboard - The keyboard  utility library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
(function(factory,globals) {
  var define = globals.define,
      require = globals.require,
      isAmd = (typeof define === 'function' && define.amd),
      isCmd = (!isAmd && typeof exports !== 'undefined');

  if (!isAmd && !define) {
    var map = {};
    function absolute(relative, base) {
        if (relative[0]!==".") {
          return relative;
        }
        var stack = base.split("/"),
            parts = relative.split("/");
        stack.pop(); 
        for (var i=0; i<parts.length; i++) {
            if (parts[i] == ".")
                continue;
            if (parts[i] == "..")
                stack.pop();
            else
                stack.push(parts[i]);
        }
        return stack.join("/");
    }
    define = globals.define = function(id, deps, factory) {
        if (typeof factory == 'function') {
            map[id] = {
                factory: factory,
                deps: deps.map(function(dep){
                  return absolute(dep,id);
                }),
                resolved: false,
                exports: null
            };
            require(id);
        } else {
            map[id] = {
                factory : null,
                resolved : true,
                exports : factory
            };
        }
    };
    require = globals.require = function(id) {
        if (!map.hasOwnProperty(id)) {
            throw new Error('Module ' + id + ' has not been defined');
        }
        var module = map[id];
        if (!module.resolved) {
            var args = [];

            module.deps.forEach(function(dep){
                args.push(require(dep));
            })

            module.exports = module.factory.apply(globals, args) || null;
            module.resolved = true;
        }
        return module.exports;
    };
  }
  
  if (!define) {
     throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");
  }

  factory(define,require);

  if (!isAmd) {
    var skylarkjs = require("skylark-langx-ns");

    if (isCmd) {
      module.exports = skylarkjs;
    } else {
      globals.skylarkjs  = skylarkjs;
    }
  }

})(function(define,require) {

define('skylark-devices-keyboard/keyboard',[
	"skylark-langx-ns"
],function(skylark){
	var keyboard = {};
	/**
	 * Function: isShiftDown
	 * 
	 * Returns true if the shift key is pressed for the given event.
	 */
	keyboard.isShiftDown = function (evt) {
		return (evt != null) ? evt.shiftKey : false;
	};

	/**
	 * Function: isAltDown
	 * 
	 * Returns true if the alt key is pressed for the given event.
	 */
	keyboard.isAltDown = function (evt) {
		return (evt != null) ? evt.altKey : false;
	};

	/**
	 * Function: isControlDown
	 * 
	 * Returns true if the control key is pressed for the given event.
	 */
	keyboard.isControlDown = function (evt) {
		return (evt != null) ? evt.ctrlKey : false;
	};

	/**
	 * Function: isMetaDown
	 * 
	 * Returns true if the meta key is pressed for the given event.
	 */
	keyboard.isMetaDown = function (evt){
		return (evt != null) ? evt.metaKey : false;
	};

	/**
	 * TAB key
	 * @attribute TAB
	 * @type {Number}
	 */
	keyboard.TAB = 9;

	/**
	 * ENTER key
	 * @attribute ENTER
	 * @type {Number}
	 */
	keyboard.ENTER = 13;

	/**
	 * SHIFT key
	 * @attribute SHIFT
	 * @type {Number}
	 */
	keyboard.SHIFT = 16;

	/**
	 * CTRL key
	 * @attribute CTRL
	 * @type {Number}
	 */
	keyboard.CTRL = 17;

	/**
	 * ALT key
	 * @attribute ALT
	 * @type {Number}
	 */
	keyboard.ALT = 18;

	/**
	 * CAPS_LOCK key
	 * @attribute CAPS_LOCK
	 * @type {Number}
	 */
	keyboard.CAPS_LOCK = 20;

	/**
	 * ESC key
	 * @attribute ESC
	 * @type {Number}
	 */
	keyboard.ESC = 27;

	/**
	 * SPACEBAR key
	 * @attribute SPACEBAR
	 * @type {Number}
	 */
	keyboard.SPACEBAR = 32;

	/**
	 * PAGE_UP key
	 * @attribute PAGE_UP
	 * @type {Number}
	 */
	keyboard.PAGE_UP = 33;

	/**
	 * PAGE_DOWN key
	 * @attribute PAGE_DOWN
	 * @type {Number}
	 */
	keyboard.PAGE_DOWN = 34;

	/**
	 * END key
	 * @attribute END
	 * @type {Number}
	 */
	keyboard.END = 35;

	/**
	 * HOME key
	 * @attribute HOME
	 * @type {Number}
	 */
	keyboard.HOME = 36;

	/**
	 * INSERT key
	 * @attribute INSERT
	 * @type {Number}
	 */
	keyboard.INSERT = 45;

	/**
	 * DEL key
	 * @attribute DEL
	 * @type {Number}
	 */
	keyboard.DEL = 46;

	/**
	 * LEFT key
	 * @attribute LEFT
	 * @type {Number}
	 */
	keyboard.LEFT = 37;

	/**
	 * RIGHT key
	 * @attribute RIGHT
	 * @type {Number}
	 */
	keyboard.RIGHT = 39;

	/**
	 * UP key
	 * @attribute UP
	 * @type {Number}
	 */
	keyboard.UP = 38;

	/**
	 * DOWN key
	 * @attribute DOWN
	 * @type {Number}
	 */
	keyboard.DOWN = 40;

	/**
	 * NUM0 key
	 * @attribute NUM0
	 * @type {Number}
	 */
	keyboard.NUM0 = 48;

	/**
	 * NUM1 key
	 * @attribute NUM1
	 * @type {Number}
	 */
	keyboard.NUM1 = 49;

	/**
	 * NUM2 key
	 * @attribute NUM2
	 * @type {Number}
	 */
	keyboard.NUM2 = 50;

	/**
	 * NUM3 key
	 * @attribute NUM3
	 * @type {Number}
	 */
	keyboard.NUM3 = 51;

	/**
	 * NUM4 key
	 * @attribute NUM4
	 * @type {Number}
	 */
	keyboard.NUM4 = 52;

	/**
	 * NUM5 key
	 * @attribute NUM5
	 * @type {Number}
	 */
	keyboard.NUM5 = 53;

	/**
	 * NUM6 key
	 * @attribute NUM6
	 * @type {Number}
	 */
	keyboard.NUM6 = 54;

	/**
	 * NUM7 key
	 * @attribute NUM7
	 * @type {Number}
	 */
	keyboard.NUM7 = 55;

	/**
	 * NUM8 key
	 * @attribute NUM8
	 * @type {Number}
	 */
	keyboard.NUM8 = 56;

	/**
	 * NUM9 key
	 * @attribute NUM9
	 * @type {Number}
	 */
	keyboard.NUM9 = 57;

	/**
	 * A key
	 * @attribute A
	 * @type {Number}
	 */
	keyboard.A = 65;

	/**
	 * B key
	 * @attribute B
	 * @type {Number}
	 */
	keyboard.B = 66;

	/**
	 * C key
	 * @attribute C
	 * @type {Number}
	 */
	keyboard.C = 67;

	/**
	 * D key
	 * @attribute D
	 * @type {Number}
	 */
	keyboard.D = 68;

	/**
	 * E key
	 * @attribute E
	 * @type {Number}
	 */
	keyboard.E = 69;

	/**
	 * F key
	 * @attribute F
	 * @type {Number}
	 */
	keyboard.F = 70;

	/**
	 * G key
	 * @attribute G
	 * @type {Number}
	 */
	keyboard.G = 71;

	/**
	 * H key
	 * @attribute H
	 * @type {Number}
	 */
	keyboard.H = 72;

	/**
	 * I key
	 * @attribute I
	 * @type {Number}
	 */
	keyboard.I = 73;

	/**
	 * J key
	 * @attribute J
	 * @type {Number}
	 */
	keyboard.J = 74;

	/**
	 * K key
	 * @attribute K
	 * @type {Number}
	 */
	keyboard.K = 75;

	/**
	 * L key
	 * @attribute L
	 * @type {Number}
	 */
	keyboard.L = 76;

	/**
	 * M key
	 * @attribute M
	 * @type {Number}
	 */
	keyboard.M = 77;

	/**
	 * N key
	 * @attribute N
	 * @type {Number}
	 */
	keyboard.N = 78;

	/**
	 * O key
	 * @attribute O
	 * @type {Number}
	 */
	keyboard.O = 79;

	/**
	 * P key
	 * @attribute P
	 * @type {Number}
	 */
	keyboard.P = 80;

	/**
	 * Q key
	 * @attribute Q
	 * @type {Number}
	 */
	keyboard.Q = 81;

	/**
	 * R key
	 * @attribute R
	 * @type {Number}
	 */
	keyboard.R = 82;

	/**
	 * S key
	 * @attribute S
	 * @type {Number}
	 */
	keyboard.S = 83;

	/**
	 * T key
	 * @attribute T
	 * @type {Number}
	 */
	keyboard.T = 84;

	/**
	 * U key
	 * @attribute U
	 * @type {Number}
	 */
	keyboard.U = 85;

	/**
	 * V key
	 * @attribute V
	 * @type {Number}
	 */
	keyboard.V = 86;

	/**
	 * W key
	 * @attribute W
	 * @type {Number}
	 */
	keyboard.W = 87;

	/**
	 * X key
	 * @attribute X
	 * @type {Number}
	 */
	keyboard.X = 88;

	/**
	 * Y key
	 * @attribute Y
	 * @type {Number}
	 */
	keyboard.Y = 89;

	/**
	 * Z key
	 * @attribute Z
	 * @type {Number}
	 */
	keyboard.Z = 90;

	/**
	 * F1 key
	 * @attribute F1
	 * @type {Number}
	 */
	keyboard.F1 = 112;

	/**
	 * F2 key
	 * @attribute F2
	 * @type {Number}
	 */
	keyboard.F2 = 113;

	/**
	 * F3 key
	 * @attribute F3
	 * @type {Number}
	 */
	keyboard.F3 = 114;

	/**
	 * F4 key
	 * @attribute F4
	 * @type {Number}
	 */
	keyboard.F4 = 115;

	/**
	 * F5 key
	 * @attribute F5
	 * @type {Number}
	 */
	keyboard.F5 = 116;

	/**
	 * F6 key
	 * @attribute F6
	 * @type {Number}
	 */
	keyboard.F6 = 117;

	/**
	 * F7 key
	 * @attribute F7
	 * @type {Number}
	 */
	keyboard.F7 = 118;

	/**
	 * F8 key
	 * @attribute F8
	 * @type {Number}
	 */
	keyboard.F8 = 119;

	/**
	 * F9 key
	 * @attribute F9
	 * @type {Number}
	 */
	keyboard.F9 = 120;

	/**
	 * F10 key
	 * @attribute F10
	 * @type {Number}
	 */
	keyboard.F10 = 121;

	/**
	 * F11 key
	 * @attribute F11
	 * @type {Number}
	 */
	keyboard.F11 = 122;

	/**
	 * F12 key
	 * @attribute F12
	 * @type {Number}
	 */
	keyboard.F12 = 123;

	return skylark.attach("devices.keyboard",keyboard);	
});
define('skylark-devices-keyboard/Key',[
	"skylark-langx-klass",
	"./keyboard"
],function(klass,keyboard){
	"use strict";

	/**
	 * Key is used by Keyboard, Mouse, etc, to represent a key state.
	 *
	 * @class Key
	 * @module Input
	*/
	var Key = klass({
		_construct : function() {
			/**
			 * Indicates if this key is currently pressed.
			 * @property pressed
			 * @default false
			 * @type {boolean}
			 */
			this.pressed = false;

			/**
			 * Indicates if this key was just pressed.
			 * @property justPressed
			 * @default false
			 * @type {boolean}
			 */
			this.justPressed = false;
			
			/**
			 * Indicates if this key was just released.
			 * @property justReleased
			 * @default false
			 * @type {boolean}
			 */
			this.justReleased = false;

		},

		/**
		 * Update Key status based on new key state.
		 * 
		 * @method update
		 */
		update : function(action)  {
			this.justPressed = false;
			this.justReleased = false;

			if(action === Key.DOWN)
			{
				if(this.pressed === false)
				{
					this.justPressed = true;
				}
				this.pressed = true;
			}
			else if(action === Key.UP)
			{
				if(this.pressed)
				{
					this.justReleased = true;
				}
				this.pressed = false;
			}
			else if(action === Key.RESET)
			{
				this.justReleased = false;
				this.justPressed = false;
			}
		},

		/**
		 * Set this key attributes manually.
		 * 
		 * @method set
		 */
		set : function(justPressed, pressed, justReleased){
			this.justPressed = justPressed;
			this.pressed = pressed;
			this.justReleased = justReleased;
		},

		/**
		 * Reset key to default values.
		 * 
		 * @method reset
		*/
		reset : function() 	{
			this.justPressed = false;
			this.pressed = false;
			this.justReleased = false;
		}
	});

	/**
	 * Down
	 * @attribute DOWN
	 * @type {Number}
	 */
	Key.DOWN = -1;

	/**
	 * Up
	 * @attribute UP
	 * @type {Number}
	 */
	Key.UP = 1;

	/**
	 * Reset
	 * @attribute RESET
	 * @type {Number}
	 */
	Key.RESET = 0;


	return keyboard.Key = Key;

});
define('skylark-devices-keyboard/Monitor',[
	"skylark-langx-klass",
	"./keyboard",
	"./Key"
],function(
	klass,
	keyboard,
	Key
){
	"use strict";

	/**
	 * Keyboard instance for input in sync with the running 3D application.
	 * 
	 * The keyboard object provided by scripts is automatically updated by the runtime handler.
	 * 
	 * @class Keyboard
	 * @module Input
	 * @param {Boolean} dontInitialize If true the mouse events are not created.
	 */
	var Monitor = klass({
		_construct : function (dontInitialize) 	{
			/**
			 * Array with keyboard keys status.
			 *
			 * @property keys
			 * @type {Array}
			 */
			this.keys = [];


			/**
			 * The actions array serves as a buffer for the key input actions.
			 *
			 * Until the update method is called it stores all the key stroke actions.
			 *
			 * On update the key strokes are updated and the keys array stores the correct values.
			 *
			 * @property actions
			 * @type {Array}
			 */
			this.actions = [];

			var self = this;
			var actions = this.actions;

			/**
			 * Event manager used to handle the keyup, keydown and focus events.
			 *
			 * On each event actions are added to the actions array.
			 *
			 * @property events
			 * @type {EventManager}
			 */
			//this.events = new EventManager();
			/*
			this.events.add(window, "keydown", function(event)
			{
				actions.push(event.keyCode);
				actions.push(Key.DOWN);
			});
			this.events.add(window, "keyup", function(event)
			{
				actions.push(event.keyCode);
				actions.push(Key.UP);
			});
			this.events.add(window, "focus", function(event)
			{
				self.reset();
			});
			*/
			this.handlers = {
				"keydown" : function(event) {
								actions.push(event.keyCode);
								actions.push(Key.DOWN);
							},			
				"keyup" : function(event) {
								actions.push(event.keyCode);
								actions.push(Key.UP);
							},			
				"focus" : function(event) {
								self.reset();
							},			


			};

			if(dontInitialize !== true)
			{
				this.create();
			}


		},

		/**
		 * Update key flags synchronously.
		 * 
		 * @method update
		 */
		update : function() 	{
			var end = 0;

			while(this.actions.length > end)
			{
				var key = this.actions.shift();
				var action = this.actions.shift();

				if(this.keys[key] === undefined)
				{
					this.keys[key] = new Key();
				}

				this.keys[key].update(action);

				if(this.keys[key].justReleased || this.keys[key].justPressed)
				{
					this.actions.push(key);
					this.actions.push(Key.RESET);
					end += 2;
				}
			}
		},

		/**
		 * Reset keyboard status to default.
		 *
		 * Does not clean the action list.
		 * 
		 * @method reset
		 */
		reset : function() {
			//Reset all keys
			for(var i = 0; i < this.keys.length; i++)
			{
				if(this.keys[i] !== undefined)
				{
					this.keys[i].reset();
				}
			}
		},

		/**
		 * Check if a key is pressed.
		 * 
		 * @method keyPressed
		 * @return {boolean} True is the key is currently pressed
		 */
		keyPressed : function(key){
			return this.keys[key] !== undefined && this.keys[key].pressed;
		},

		/**
		 * Check is a key as just pressed.
		 * 
		 * @method keyJustPressed
		 * @return {boolean} True is the key was just pressed
		 */
		keyJustPressed : function(key){
			return this.keys[key] !== undefined && this.keys[key].justPressed;
		},

		/**
		 * Check if a key was just released.
		 * 
		 * @method keyJustReleased
		 * @return {boolean} True is the key was just pressed
		 */
		keyJustReleased : function(key){
			return this.keys[key] !== undefined && this.keys[key].justReleased;
		},


		/**
		 * Create keyboard events.
		 * 
		 * @method dispose
		 */
		create : function(){
			//this.events.create();
			for (var event in this.handlers) {
				window.addEventListener(event,this.handlers[event]);
			}
		},

		/**
		 * Dispose keyboard events.
		 * 
		 * @method dispose
		 */
		dispose : function()	{
			//this.events.destroy();
			for (var event in this.handlers) {
				window.removeEventListener(event,this.handlers[event]);
			}
		}

	});


	return keyboard.Monitor =  Monitor;
});
define('skylark-devices-keyboard/main',[
	"./keyboard",
	"./Key",
	"./Monitor"
],function(keyboard){
	return keyboard;
});
define('skylark-devices-keyboard', ['skylark-devices-keyboard/main'], function (main) { return main; });


},this);
//# sourceMappingURL=sourcemaps/skylark-devices-keyboard.js.map
