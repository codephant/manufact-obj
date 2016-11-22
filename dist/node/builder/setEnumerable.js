"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = builder$setEnumerable;
function builder$setEnumerable(value) {
	value = arguments.length < 1 || Boolean(value);
	this.__descriptor.enumerable = value;
	return this;
}