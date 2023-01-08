// website sections
const main = document.getElementById('container');
const screen = document.getElementById('screen');
const buttons = document.getElementById('buttons');

// buttons
const nums = [];
nums[9] = document.getElementById('nine');
nums[8] = document.getElementById('eight');
nums[7] = document.getElementById('seven');
nums[6] = document.getElementById('six');
nums[5] = document.getElementById('five');
nums[4] = document.getElementById('four');
nums[3] = document.getElementById('three');
nums[2] = document.getElementById('two');
nums[1] = document.getElementById('one');
nums[0] = document.getElementById('zero');

const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

// variables
class Calculator {
    operator;
    currentValue;
    preValue;

    constructor() {
        screen.innerText = 0;
        nums.forEach(button => {
            button.addEventListener('click', () => {
                let temp = screen.innerText;
                if (screen.innerText == 0) {
                    temp = button.value;
                } else {
                    console.log(temp);
                    temp = temp + button.value;
                }
                this.updateScreen(temp);
                this.currentValue = temp;
                temp = 0;
            })
        })

        multiply.addEventListener('click', () => {
            this.preValue = this.currentValue;
            this.currentValue = 0;
            this.operator = 'mul';
            this.updateScreen(0);
        })
        divide.addEventListener('click', () => {
            this.preValue = this.currentValue;
            this.currentValue = 0;
            this.operator = 'div';
            this.updateScreen(0);
        })
        add.addEventListener('click', () => {
            this.preValue = this.currentValue;
            this.currentValue = 0;
            this.operator = 'add';
            this.updateScreen(0);
        })
        subtract.addEventListener('click', () => {
            this.preValue = this.currentValue;
            this.currentValue = 0;
            this.operator = 'sub';
            this.updateScreen(0);
        })
        equals.addEventListener('click', () => {
            this.calculate();
            this.updateScreen(this.currentValue);
        })
        clear.addEventListener('click', () => {
            this.preValue = 0;
            this.currentValue = 0;
            this.operator = '';
            this.updateScreen(0);
        })
    }

    clearScreen() {
        this.updateScreen('');
    }

    updateScreen(newValue){
        screen.innerText = newValue;
    }

    calculate() {
        switch (this.operator) {
            case 'add':
                this.currentValue = (parseInt(this.currentValue) + parseInt(this.preValue));
                break;
            case 'sub':
                this.currentValue = (this.preValue - this.currentValue);
                break;
            case 'div':
                this.currentValue = (this.preValue / this.currentValue);
                break;
            case 'mul':
                this.currentValue = (this.preValue * this.currentValue);
                break;
        }
    }


}

calc = new Calculator();