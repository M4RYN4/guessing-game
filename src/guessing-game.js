class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.mid = Math.round((this.min + this.max) / 2);
        return this.mid;
    }

    lower() {//-> search left side
        this.max = this.mid;//now max = mid
    }

    greater() {//-> search right side
       this.min = this.mid;//now min = mid
    }
}

module.exports = GuessingGame;
