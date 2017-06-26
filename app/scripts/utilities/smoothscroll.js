'use strict';

function SmoothWheelScroll(options) {
    this.$document = $(document);
    this.$window = $(window);
    this.$body = $('html, body');
    this.scroll = false;
    this.root = 0;
    this.options = extend({}, this.options);
    extend(this.options, options);
}

SmoothWheelScroll.prototype.options = {
    easing: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    step: 200,
    speed: 800,
}

SmoothWheelScroll.prototype._init = function() {

}

SmoothWheelScroll.prototype._initEvents = function() {
    var self = this;
    window.addEventListener('mousewheel', function(e) {
        self.deltaY = e.originalEvent.wheelDeltaY,
            self.detail = e.originalEvent.detail;
        self.scrollY = self.$document.height() > self.$window.height();
        self.scroll = true;
        if (self.scrollY) {
            self.view = self.$window.height();
            if (self.deltaY < 0 || self.detail > 0)
                self.root = (self.root + self.view) >= self.$document.height() ? self.root : self.root += self.options.step;
            if (self.deltaY > 0 || self.detail < 0)
                self.root = self.root <= 0 ? 0 : self.root -= self.options.step;
            $body.stop().animate({
                scrollTop: self.root
            }, self.options.speed, self.options.easing, function() {
                self.scroll = false;
            });
        }
        return false;
    });
    window.addEventListener('scroll', function(e) {
        if (self.scrollY && !self.scroll) self.root = self.$window.scrollTop();
    });
    window.addEventListener('mousewheel', function(e) {
        if (self.scrollY && !self.scroll) self.view = self.$window.height();
    });
}

window.SmoothWheelScroll = SmoothWheelScroll;

new SmoothWheelScroll();
