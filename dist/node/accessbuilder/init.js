"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = accessbuild_init;
function accessbuild_init(parent) {
	this.__parent = parent;
	this.__descriptor = parent.__descriptor;
	this.__doneAfterNext = false;
}