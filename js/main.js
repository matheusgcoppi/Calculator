function createCalculator () {
    return {
        display: document.querySelector('.display'),
        clear: document.querySelector('.btn-clear'),

        start() {
            alert('hello');
            this.clickButtons();
        },

        clickButtons() {
            //this => calculator
            document.addEventListener('click', function(e) {
                const element = e.target; //it will show up all stuff What I click, so useful
            //this => document
                if(element.classList.contains('btn-num')) {
                    this.buttonToDisplay(element.innerText); //I need to use .This because when one method calls another method, e.g: if I want initialize clickButtons() inside the start() I will use .this like in this case
                }
                
                if(element.classList.contains('btn-clear')) this.clearDisplay();

                if(element.classList.contains('btn-del')) this.deleteOne();

                if(element.classList.contains('btn-equal')) this.equalDisplay();

            }.bind(this)) //I use .bind because in this case we can represent the display/calculator and without the .bind this will point to the document and not the calculator
        },
        
        buttonToDisplay(value) {
            this.display.value += value;
        },

        clearDisplay() {
            this.display.value = ''
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        equalDisplay() {
            //let count = this.display.value;

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
}

const calculator = createCalculator();
calculator.start();




