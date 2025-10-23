// greeting.js - 사용자 인사 기능
export class Greeter {
    constructor(name) {
        this.name = name
    }

    sayHello() {
        return "Hello, " + this.name + "!"
    }

    sayGoodbye() {
        return "Goodbye, " + this.name
    }

    greet(time) {
        if (time < 12) {
            return "Good morning, " + this.name
        } else if (time < 18) {
            return "Good afternoon, " + this.name
        } else {
            return "Good evening, " + this.name
        }
    }
}
