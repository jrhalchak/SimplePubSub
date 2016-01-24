'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return root.simplePubSub = factory();
    });
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
    module.exports = root.simplePubSub = factory();
  } else {
    root.simplePubSub = root.SPS = factory();
  }
})(window || module || {}, function () {
  var _eventRegister = {};

  var SimplePubSub = function () {
    function SimplePubSub() {
      _classCallCheck(this, SimplePubSub);
    }

    _createClass(SimplePubSub, [{
      key: 'on',
      value: function on(e) {
        for (var _len = arguments.length, callback = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          callback[_key - 1] = arguments[_key];
        }

        if (callback.length && _eventRegister[e] && _eventRegister[e].length) {
          var _eventRegister$e;

          (_eventRegister$e = _eventRegister[e]).push.apply(_eventRegister$e, callback);
        } else if (callback.length) {
          var _eventRegister$e2;

          _eventRegister[e] = [];
          (_eventRegister$e2 = _eventRegister[e]).push.apply(_eventRegister$e2, callback);
        } else {
          console.log('No callback passed for event ' + e);
        }
        return this;
      }
    }, {
      key: 'trigger',
      value: function trigger(e) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        if (_eventRegister[e] && _eventRegister[e].length) {
          _eventRegister[e].forEach(function (x) {
            x.apply(undefined, args);
          });
        } else if (!_eventRegister[e]) {
          console.log('There is no event registered for ' + e);
        }
        return this;
      }
    }, {
      key: 'off',
      value: function off(e) {
        if (_eventRegister[e]) delete _eventRegister[e];
        return this;
      }
    }]);

    return SimplePubSub;
  }();

  ;

  return new SimplePubSub();
});