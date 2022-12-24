class ValidaCPF {
    
    constructor(cpf) {
        
        this.cpf = cpf.replace(/\D+/g, '')
        // Object.defineProperty(this, 'cpf', {
        //     writable: false,
        //     enumerable: true,
        //     configurable: false,
        //     value: cpf.replace(/\D+/g, ''), // Remove digitos 
        // })

    }

    check_input() {
        
        console.log(this.cpf)
        if (!this.cpf) return false
        if (typeof (this.cpf) !== 'string') return false
        if (this.cpf.length !== 11) return false
        // if (this.checkseq()) return false
        return 'To AQUI'
    }

    check_seq() {
        return this.cpf.charAt(0).repeat(11) === this.cpf
    }

    check_cpf() {
        
        const _cpf = Array.from(this.cpf)
        const slice_cpf = _cpf.slice(0, -2)

        const checked_cpf = this.gen_cpf(slice_cpf)
        

        return checked_cpf == this.cpf

    }

    gen_num(num) {
        return Array(num).fill().map(() => Number(Math.random() * 9).toFixed())
    }


    gen_cpf(rand_num=false) {
        
        let randCPF = (!rand_num) ? this.gen_num(9) : rand_num

        // #1 Ciclo
        const num10 = this.calcNum(randCPF)
        const cpf10 = this.lastDigit(num10)
        randCPF.push(cpf10)
        
        // #2 Ciclo
        const num11 = this.calcNum(randCPF)
        const cpf11 = this.lastDigit(num11)
        randCPF.push(cpf11)
        
        // Output
        return randCPF.join('')
    }

    // Faz a soma dos valores
    calcNum(cpfSemDigitos) {
        let reversal = cpfSemDigitos.length + 1

        return cpfSemDigitos.reduce((a, v) => {
            a += v * reversal
            reversal--
            return a
        }, 0)
    }

    // calcula último digito
    lastDigit(num) {
        num =  11 - (num % 11)
        return num > 9 ? 0 : num
    }


}



