import bcrypt from 'bcryptjs'

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [
      {
        nome: 'John Doe',
        email: 'johndoe@teste.com',
        password_hash: await bcrypt.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Richard Loy',
        email: 'richard@teste.com',
        password_hash: await bcrypt.hash('654321', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Michel Way',
        email: 'michel@teste.com',
        password_hash: await bcrypt.hash('14785', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      
    ], {});

  },

  async down() { }
};
