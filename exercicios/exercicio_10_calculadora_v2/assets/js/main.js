function Calculadora() {

    this.display = document.querySelector('.display')

    // Init
    this.inicia = () => {
        this.catchClicks()
        this.catchKeyboard()
    }

    /* Catch Events */

    // Click
    this.catchClicks = () => {
        document.addEventListener('click', e => {
            const el = e.target
            // Add Display
            if (el.classList.contains('btn-num')) this.addDisplay(el)
            // Clear Display
            if (el.classList.contains('btn-clear')) this.clearDisplay()
            // Del BTN
            if (el.classList.contains('btn-del')) this.delDisplay()
            // Eq BTN
            if (el.classList.contains('btn-eq')) this.eqDisplay()

        })
    }
    // Keyboard
    this.catchKeyboard = () => {
        document.addEventListener('keypress', e => { if (e.keyCode == 13) {this.eqDisplay()}
        })
    }

    /* Methods */
    
    this.addDisplay = el => this.display.value += el.innerText 
    this.clearDisplay = () => this.display.value = ''
    this.delDisplay = () => this.display.value = this.display.value.slice(0, -1) 
    this.eqDisplay = () => {
        try {
            this.display.value = eval(this.display.value)
        } catch (e) {
            this.display.value = '#Error'
        }
    }

}

const calc = new Calculadora()
calc.inicia()