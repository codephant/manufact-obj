"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = accessbuild$commitToParent;
function accessbuild$commitToParent() {
	const { __parent: p } = this;
	p._commit();
	return p;
}