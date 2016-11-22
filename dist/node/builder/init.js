"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = builder_init;

const create = Object.create;

function builder_init(object) {
	this.__object = object;
	this.__descriptor = create(null);
	this.__key = null;
}