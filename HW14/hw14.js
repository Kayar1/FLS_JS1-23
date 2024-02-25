    console.log('Task 3');
    const spinnerContent = ['♣️','♠️','♦️','♥️'];
    
    const spinner = {
        id: 0,
        time: 50,
        maxTimer: 50,
        spin: ['|','/','-','\\'],
        symbols: [],

        show(){
            document.getElementById('my-spinner').innerText = `${this.spin[this.time % this.spin.length]}${this.time} = ${this.symbols}`;
        },

        changeSpinner(){
            this.symbols.push(this.symbols[0]);
            this.symbols.shift();
            setTimeout(() => this.show(), 500);
        }

    }
    
    spinner.symbols = Array.from(spinnerContent);

    const loadSpinner = (loaderSpinner) => {
        loaderSpinner.changeSpinner();
        loaderSpinner.time--;
        if (loaderSpinner.time === 0){
            loaderSpinner.time = loaderSpinner.maxTimer;
            clearInterval(loaderSpinner.id);
        }
    }

    spinner.id = setInterval(loadSpinner, 1000, spinner);
