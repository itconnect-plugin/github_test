// timer.js - Improved version
export class Timer {
    constructor(initialTime = 30) {
      this.initialTime = initialTime;
      this.timeRemaining = initialTime;
    }
    
    getTime() {
      return this.timeRemaining;
    }
    
    tick() {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
      }
    }
    
    reset() {
      this.timeRemaining = this.initialTime;
    }
    
    isFinished() {
      return this.timeRemaining === 0;
    }
  }
