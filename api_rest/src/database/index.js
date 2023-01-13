import Sequelize from 'sequelize';
import databaseConfig from '../config/database'
import Aluno from '../models/Aluno'
import User from '../models/Users'
import Fotos from '../models/Fotos'

const models = [Aluno, User, Fotos]
const connection = new Sequelize(databaseConfig)

models.forEach((m) => m.init(connection))
models.forEach((m) => m.associate && m.associate(connection.models))
