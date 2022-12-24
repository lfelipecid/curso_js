class ValidaForm {

    constructor() {
        // Seleciona Form
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    // Catch Events
    eventos() {
        this.formulario.addEventListener('submit', e => this.handleSubmit(e))
    }

    // Handler Submit
    handleSubmit(e) {
        e.preventDefault()
        const check_fields = this.checkFields()
        const check_pwd = this.valid_pwd()

        if (check_fields && check_pwd) {
            alert('Formulário Enviado')
            this.formulario.submit()
        }
    }

    // Check Fields
    checkFields() {
        let valid = true

        // Remove error-text anterior
        for (let e of this.formulario.querySelectorAll('.error-text')) {
            e.remove()
        }

        // Pega todos os campos
        for (let c of this.formulario.querySelectorAll('.vald')) {
            const label = c.previousElementSibling.innerHTML.slice(0, -1)

            // Verifica campos vazios
            if (!c.value) {
                this.riseError(c, `${label} não pode estar vazio.`)
                valid = false
            }

            // Valida CPF
            if (c.classList.contains('cpf')) {
                valid = this.validCpf(c)
                if (!valid) return valid
            }

            // Valida Usuário
            if (c.classList.contains('user')) {
                valid = this.valid_user(c)
                if (!valid) return valid
            }

        }

        return valid

    }

    // Cria Error
    riseError(cl, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        cl.insertAdjacentElement('afterend', div)

    }

    // Valida CPF
    validCpf(c) {
        const cpf = new ValidaCPF(c.value)

        if (!cpf.check_cpf()) {
            this.riseError(c, 'CPF Inválido')
            return false
        } else {
            return true
        }
    }

    // Valida User
    valid_user(c) {

        let value = true
        const _input = c.value

        // lenght
        const user_length = _input.length
        if (user_length < 3 || user_length > 12) {
            this.riseError(c, 'Usuário precisa ter entre 3 a 12 caracteres.')
            value = false
        }

        // letras e numbers
        if (!_input.match(/^[a-zA-Z0-9]+$/g)) {
            this.riseError(c, `Usuário não pode conter caracters especiais, apenas letras e numeros.`)
            value = false
        }

        return value
    }

    // Valida Pwd
    valid_pwd() {

        let valid = true
        const pwd = document.querySelector('.pwd').value
        const repwd = document.querySelector('.re-pwd').value

        // combinam
        if (pwd !== repwd) {
            this.riseError(pwd, 'Password não combinam')
            valid = false
        }

        // lenght
        if (pwd.length < 6 || pwd.length > 12) {
            this.riseError(pwd, 'Senha precisa ter entre 6 a 12 caracteres.')
            valid = false
        }

        return valid
    }


}

const valida = new ValidaForm()
