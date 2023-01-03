import Sequelize, { Model } from 'sequelize'
import bcryptjs from 'bcryptjs'

export default class Users extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 a 255 caracteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já existe',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 50],
            msg: 'Senha deve ter de 4 a 50 digitos.',
          },
        },
      },
    }, {
      sequelize,
    })

    this.addHook('beforeSave', async (user) => {
      if(user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8)
      }
    })

    return this
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash)
  }

}
