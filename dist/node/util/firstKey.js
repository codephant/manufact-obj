"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = firstKey;

const owns = Object.prototype.hasOwnProperty;

function firstKey(o) {
	let k;
	for (k in o) break;
	return k != null && owns.call(o, k) ? k : null;
}