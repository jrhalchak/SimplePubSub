'use strict';

(function (GLOBAL) {
  var _eventRegister = {},
      simplePubSub = {
    on: function on(e) {
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
    },
    trigger: function trigger(e) {
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
    },
    off: function off(e) {
      if (_eventRegister[e]) delete _eventRegister[e];
    }
  };

  GLOBAL.SPS = GLOBAL.simplePubSub = simplePubSub;
})(window);