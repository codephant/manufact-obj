"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = builder$withPrototype;
function builder$withPrototype(prototype) {
	if (this.__object == null) this.__object = Object.create(prototype);else throw new TypeError("prototype creates new object");
	return this;
}