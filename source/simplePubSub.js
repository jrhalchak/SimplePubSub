(function(GLOBAL) {
  var _eventRegister = {},
    simplePubSub = {
      on: (e, ...callback)=> {
        if(callback.length && _eventRegister[e] && _eventRegister[e].length) {
          _eventRegister[e].push(...callback);
        } else if(callback.length){
          _eventRegister[e] = [];
          _eventRegister[e].push(...callback);
        } else {
          console.log('No callback passed for event ' + e);
        }
      },
      trigger: (e, ...args)=> {
        if(_eventRegister[e] && _eventRegister[e].length) {
          _eventRegister[e].forEach((x)=> { x(...args) });
        } else if (!_eventRegister[e]) {
          console.log('There is no event registered for ' + e);
        }
      },
      off: (e)=> {
        if(_eventRegister[e]) delete _eventRegister[e];
      }
    };

  GLOBAL.SPS = GLOBAL.simplePubSub = simplePubSub;
})(window);
