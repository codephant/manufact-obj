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
		switch (typeof name) {
			case "string":
				this.__key = name;
				return (0, _create2.default)(this);
			case "function":
				this.__key = name.name;
				this.__descriptor.get = name;
				this._commit();
				return this;
			default:
				[name, value] = (0, _firstPair2.default)(name);
		}
	}
	this.__key = name;
	this.__descriptor.value = value;
	this._commit();
	return this;
}