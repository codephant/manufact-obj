"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createFrom = require("./createFrom");

var _createFrom2 = _interopRequireDefault(_createFrom);

var _createPlain = require("./createPlain");

var _createPlain2 = _interopRequireDefault(_createPlain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.create(Object.prototype, { from: { value: _createFrom2.default },
	plain: { value: _createPlain2.default }
});