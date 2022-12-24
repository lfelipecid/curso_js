function criaCalculadora() {
    return {

        display: document.querySelector('.display'),

        inicia() {
            this.clickBtn()
            this.keyEnter()
        },

        // Captura click btn
        clickBtn() {
            document.addEventListener('click', e => {
                el = e.target

                // Numeros e 
                if (el.classList.contains('btn-num')) { this.btnDisplay(el.innerText) }

                // Clear
                if (el.classList.contains('btn-clear')) { this.btnClearDisplay() }

                // Del btn
                if (el.classList.contains('btn-del')) { this.btnDel() }

                // Equal
                if (el.classList.contains('btn-eq')) { this.btnEq() }
            })
        },

        // Enter Btn
        keyEnter() {
            this.display.addEventListener('keypress', e => { if (e.keyCode == 13) { this.btnEq() } })
        },


        // Functions
        btnDisplay(valor) {
            this.display.value += valor
        },

        btnClearDisplay() {
            this.display.value = ''
        },

        btnDel() {
            this.display.value = this.display.value.slice(0, -1)
        },

        btnEq() {

            try {
                let conta = eval(this.display.value)

                if (!conta) {
                    this.display.value = '#Error'
                    return
                } else {
                    this.display.value = conta
                }

            } catch (e) {
                this.display.value = '#Error'
            }
        }


    }
}

const calculadora = criaCalculadora()
calculadora.inicia()
