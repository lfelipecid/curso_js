import Sequelize, { Model } from 'sequelize'

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres'
          }
        }
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre 3 e 255 caracteres'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail already in use'
        },
        isEmail: {
          msg: 'E-mail inválido'
        }
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        isInt: {
          msg: 'Idade inválida'
        }
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        isFloat: {
          msg: 'Peso inválido'
        }
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        isFloat: {
          msg: 'Altura inválida'
        }
      },
    }, {
      sequelize,
    })
    return this
  }

  static associate(models) {
    this.hasMany(models.Fotos, { foreignKey: 'aluno_id'})
  }
}
