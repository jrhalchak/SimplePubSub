// Obviously won't run here. Added for easy testing outside the module.
var SPS = require('simple-pub-sub');

SPS.on('test', function() { console.log('test') });

SPS.trigger('test');

SPS.off('test');

SPS.trigger('test');
