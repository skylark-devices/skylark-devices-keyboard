define([
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