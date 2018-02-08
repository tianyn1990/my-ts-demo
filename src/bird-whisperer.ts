class BirdWhisperer {
    chirping: string;
    constructor(message: string) {
        this.chirping = message;
    }
    chirp() {
        return `jiu~${this.chirping}`
    }
}

const msg = 'coo coo coo';
let birdWhisperer = new BirdWhisperer(msg);