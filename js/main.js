function createCalculator () {
    return {
        display: document.querySelector('.display'),

        start() {
            alert('hello')
        },

        clickButtons() {
            document.addEventListener('click', (e) => {
                const element = e.target; //it will show up all stuff What I click, so useful
                if(element ==)
            });
        },
    }
}

const calculator = createCalculator();
calculator.start();
calculator.clickButtons();



