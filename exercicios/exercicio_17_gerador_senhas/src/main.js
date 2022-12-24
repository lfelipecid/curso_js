import gen_pwd from './modules/gen'
import './assets/css/sytle.css'

class Keygen {
    constructor() {
        this.keygen = document.querySelector('.keygen')
        this.form_keygen = document.querySelector('.form-keygen')
        this.eventos()
    }

    eventos() {
        this.form_keygen.addEventListener('submit', e => this.handler_events(e))
    }

    handler_events(e) {
        e.preventDefault()
        this.catch_fields()
    }

    catch_fields() {
        // Catch Fields 
        const num = Number(this.form_keygen.querySelector('.quantity').value)
        const addnum = this.form_keygen.querySelector('.add-num').checked
        const addupper = this.form_keygen.querySelector('.add-upper').checked
        const addlower = this.form_keygen.querySelector('.add-lower').checked
        const addsymb = this.form_keygen.querySelector('.add-symb').checked

        // Gen Pwd
        const pwd = gen_pwd(num, addnum, addupper, addlower, addsymb)

        if (!num) return this.injection('Digite quantidade de caracteres.')
 
        if (num) {
            if (addnum || addupper || addlower || addsymb) {
                this.injection(pwd)
            }
            else {
                this.injection('Selecione uma das opções')
            }
        }

    }

    injection(text) {
        this.keygen.innerHTML = text
    }

}

const run_keygen = new Keygen()
