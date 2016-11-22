"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = builder$setWritable;
function builder$setWritable(value) {
	value = arguments.length < 1 || Boolean(value);
	this.__descriptor.writable = value;
	return this;
}