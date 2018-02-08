var BirdWhisperer = /** @class */ (function () {
    function BirdWhisperer(message) {
        this.chirping = message;
    }
    BirdWhisperer.prototype.chirp = function () {
        return "jiu~" + this.chirping;
    };
    return BirdWhisperer;
}());
var msg = 'coo coo coo';
var birdWhisperer = new BirdWhisperer(msg);
//# sourceMappingURL=bird-whisperer.js.map