function createCalculator () {
    return {
        display: document.querySelector('.display'),

        start() {
            alert('hello')
        }
    }
}

const calculator = createCalculator();
calculator.start();



