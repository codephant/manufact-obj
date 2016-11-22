"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = builder$property;

var _create = require("../accessbuilder/create");

var _create2 = _interopRequireDefault(_create);

var _firstPair = require("../util/firstPair");

var _firstPair2 = _interopRequireDefault(_firstPair);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function builder$property(name, value) {
	if (arguments.length < 2) {
		if (typeof name === "string") {
			this.__key = name;
			return (0, _create2.default)(this);
		}
		[name, value] = (0, _firstPair2.default)(name);
	}
	this.__key = name;
	this.__descriptor.value = value;
	this._commit();
	return this;
}