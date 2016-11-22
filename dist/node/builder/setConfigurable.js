"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = builder$setConfigurable;
function builder$setConfigurable(value) {
	value = arguments.length < 1 || Boolean(value);
	this.__descriptor.configurable = value;
	return this;
}