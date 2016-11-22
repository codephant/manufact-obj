"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = builder$commit;

const define = Object.defineProperty;
const create = Object.create;

function builder$commit() {
	const { __key: key, __descriptor: desc } = this;
	if (key == null) throw new TypeError("missing property key");
	if (!("value" in desc || "set" in desc || "get" in desc)) throw new TypeError("missing property value");
	define(this.__object, key, desc);
	this.__key = null;
	this.__descriptor = create(null);
}