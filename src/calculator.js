export class Calculator {
    constructor(leftValue,rightValue) {
        this.leftValue = leftValue;
        this.rightValue = rightValue;
    }

    add = () => this.leftValue + this.rightValue
         
    division = () => this.leftValue / this.rightValue;

    multiply = () => this.leftValue * this.rightValue;
    
}

