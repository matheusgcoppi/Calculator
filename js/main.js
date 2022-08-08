function Calculator() {
    this.display = document.querySelector('.display');
    this.clear = document.querySelector('.clear');

    this.startCalculator = () => {
        alert('Hello');
        this.clickButtons()
        this.clickEnter()
    }; 

    this.clickButtons = () => {
        document.addEventListener('click', e => {
            const element = e.target
            if(element.classList.contains('btn-num')) this.showDisplay(element);

            if(element.classList.contains('btn-clear')) this.clearButton();

            if(element.classList.contains('btn-del')) this.delete();

            if(element.classList.contains('btn-equal')) this.makeCount();
        });
    };

    this.clickEnter = () => {
        document.addEventListener('keyup', (e) => {
            if(e.key === 'Enter') {
                this.makeCount();   
        }
        })
    }

    this.showDisplay = (element) => {
        this.display.value += element.innerText;
        this.display.focus() //If I don't use it, I'll focus in another button and duplicate
    };

    this.clearButton = () => this.display.value = '';

    this.delete = () => this.display.value = this.display.value.slice(0,-1); 

    this.makeCount = () => {
        try {
            this.display.value = eval(this.display.value);

            if(!this.display.value) {
                alert('Invalid count, please try again');
                return;
            }
        } catch (error) {
            alert('Invalid count, please try again');
            return;
        }
    }
    }

const calculator = new Calculator;
calculator.startCalculator()
