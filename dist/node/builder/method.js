"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = builder$method;

var _firstPair = require("../util/firstPair");

var _firstPair2 = _interopRequireDefault(_firstPair);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function builder$method(name, func) {
	if (arguments.length < 2) {
		if (typeof name === "function") {
			func = name;
			name = func.name;
		} else {
			[name, func] = (0, _firstPair2.default)(name);
		}
	}
	if (typeof func !== "function") throw new TypeError("only functions for method");
	this.property(name, func);
	return this;
}