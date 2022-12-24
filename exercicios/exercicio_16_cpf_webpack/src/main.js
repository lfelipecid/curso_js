import ValidaCPF from './modules/ValidaCPF'
import './assets/css/sytle.css'

(function() {
    
    const cpf = new ValidaCPF()
    const field_cpf = document.querySelector('.field-cpf')

    field_cpf.innerHTML = format_cpf(cpf.gen_cpf())

    
    function format_cpf(cpf) {
        return (
            cpf.slice(0,3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' + 
            cpf.slice(9, 11)
        )
    }


})()