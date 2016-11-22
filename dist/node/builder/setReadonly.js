"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = builder$setReadonly;
function builder$setReadonly() {
	return this.write(false);
}