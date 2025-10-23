// calculator.js - 계산기 기능
export class Calculator {
    constructor() {
        this.result = 0
    }

    add(a, b) {
        return a + b
    }

    subtract(a, b) {
        return a - b
    }

    multiply(a, b) {
        return a * b
    }

    divide(a, b) {
        if (b == 0) {
            throw new Error("0으로 나눌 수 없습니다")
        }
        return a / b
    }

    power(base, exponent) {
        return Math.pow(base, exponent)
    }

    average(numbers) {
        const sum = numbers.reduce((acc, num) => acc + num, 0)
        return sum / numbers.length
    }
}
