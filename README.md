# Simple PubSub

Simple PubSub is a small library that offers arbitrary event bindings using a convention similar to the jQuery event system.  It has no dependencies.

Simple PubSub can be run in-browser or in node (_theoretically_). It's AMD and CommonJs _compatible_.

## Methods
Simple PubSub adds two objects to the global scope, both referencing the pubsub (because I'm lazy and didn't want to type the full name). They are `SPS` and `simplePubSub`, you can use either one.

#### .on('eventName', ...callback)
The _on_ method allows you to subscribe to an event. You bind as many callbacks as you want to an event.

If the event is already registered, it will add the new callbacks. If the event doesn't exist, it will register the event then bind the callbacks.

```
SPS.on('app:Open', function() {
  alert('Open!');
});
```

P.S. Event name convention is completely up to you.

#### .trigger('eventName', ...args)
Trigger will invoke any callbacks bound to the event in the register with the given name.

You can also pass in as many arguments as you wish. They will be passed along so they are accessible to any callbacks you've registered with an event.

```
SPS.trigger('app:Open');
```

#### .off('eventName')
The _off_ method will **remove any and all** callbacks currently associated with a registered event. It completely removes the event from the register.
```
SPS.off('app:Open');
```

```
SPS.trigger('app:Open'); // "There is no event registered for app:Open"
```

### Contact
If you need help, hit me up at [@onlinebhero](http://www.twitter.com/onlinebhero).
