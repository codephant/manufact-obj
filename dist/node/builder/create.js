"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = builder_create;

var _init = require("./init");

var _init2 = _interopRequireDefault(_init);

var _deferredCreates = require("./deferredCreates");

var _deferredCreates2 = _interopRequireDefault(_deferredCreates);

var _prototype = require("./prototype");

var _prototype2 = _interopRequireDefault(_prototype);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const create = Object.create;

function builder_create(object) {
	if (arguments.length) {
		var builder = create(_prototype2.default);
		_init2.default.apply(builder, arguments);
		return builder;
	} else {
		return _deferredCreates2.default;
	}
}