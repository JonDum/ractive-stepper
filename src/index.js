require('./styles');

module.exports = Ractive.extend({

    template: require('./template'),

    data: {
        value: 0,
        size: 3,
        showInput: true,

        step: 1,

        min: null,
        max: null,
    },

    increment: function(by) {

        var self = this;
        var value = self.get('value');
        var max = self.get('max');
        var step = self.get('step');

        value = parseInt(value, 10);
        value += (by || step)

        if (max !== null)
            value = Math.min(value, max);

        self.set('value', value);

    },

    decrement: function(by) {

        var self = this;
        var value = this.get('value');
        var min = this.get('min');
        var step = self.get('step');

        value = parseInt(value, 10);
        value -= (by || step)

        if (min !== null)
            value = Math.max(value, min);

        this.set('value', value);

    },

    oninit: function() {

        var self = this;

        var interval, timeout;

        var bound = {
            incrementing: self.increment.bind(self),
            decrementing: self.decrement.bind(self),
        };

        self.observe('incrementing decrementing', function(value, old, keypath) {

            if (value) {

                timeout = setTimeout(function() {
                    interval = setInterval(bound[keypath], 10);
                }, 500);
            }
            else {
                if (old === true) {
                    // call the inc/dec function just once if it was a quick click
                    bound[keypath]();
                }
                clearTimeout(timeout)
                clearInterval(interval)
            }

        });

        self.on('keydown', function(details) {

            var event = details.original;
            var key = event.keyCode || event.which;

            // up arrow
            if (key == 38) {
                self.set('incrementing', true);
            } else
            // down arrow
            if (key == 40) {
                self.set('decrementing', true);
            }

        });

        self.on('keypress', function(details) {
            var event = details.original;
            var key = event.keyCode || event.which;

            if (!/[0-9-\.]/.test(String.fromCharCode(key))) {
                event.preventDefault();
            }
        });

        self.on('keyup', function(details) {

            self.set({
                incrementing: false,
                decrementing: false
            });

        });
		
		self.on('increment', function(details){
			self.increment();
		});
		
		self.on('decrement', function(details){
			self.decrement();
		});

    }

});
