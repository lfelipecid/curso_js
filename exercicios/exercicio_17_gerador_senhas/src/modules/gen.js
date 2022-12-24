const rand = (min, max) => Number(Math.random() * (max - min) + min).toFixed()
const gen_upper = () => String.fromCharCode(rand(65, 91))
const gen_lower = () => String.fromCharCode(rand(97, 123))
const gen_num = () => String.fromCharCode(rand(48, 58))
const symb = '~!@#$%^&*()-+[]'
const gen_symb = () => symb[rand(0, symb.length)]


export default function gen_pwd(num, addnum, adduper, addlower, addsymb) {

    const pwd = []
    
    for (let i = 0; i < num; i++) {
        addnum && pwd.push(gen_num())
        adduper && pwd.push(gen_upper())
        addlower && pwd.push(gen_lower())
        addsymb && pwd.push(gen_symb())
    }
    
    return pwd.join('').slice(0, num)
}

