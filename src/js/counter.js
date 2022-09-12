export class Counter {
    #value;
    #monitor;
    constructor(element) {
        this.#value = 1;
        this.plus = element.querySelector(".counter__plus");
        this.minus = element.querySelector(".counter__minus");
        this.minus && this.minus.addEventListener("click", () => this.dec());
        this.plus && this.plus.addEventListener("click", () => this.inc());
        this.#monitor = element.querySelector(".counter__value");
        this.getValue = this.getValue.bind(this);
    }
    inc() {
        this.#value += 1;
        this.monitor = this.#value;
    }
    dec() {
        if (this.#value < 2) return;
        this.#value -= 1;
        this.monitor = this.#value;
    }
    getValue() {
        return this.#value;
    }
    set monitor(x) {
        this.#monitor.textContent = x;
    }
    get monitor() {
        return this.#monitor;
    }
}

export function counter() {
    const counters = document.querySelectorAll(".counter");
    if (counters.length)
        counters.forEach(e => {
            new Counter(e);
        });
}
