"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = accessbuild_create;

var _init = require("./init");

var _init2 = _interopRequireDefault(_init);

var _prototype = require("./prototype");

var _prototype2 = _interopRequireDefault(_prototype);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const create = Object.create;

function accessbuild_create(parent) {
	const ab = create(_prototype2.default);
	_init2.default.apply(ab, arguments);
	return ab;
}