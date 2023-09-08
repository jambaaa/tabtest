import { Sequelize } from 'sequelize-typescript';
import path from 'path';

const sequelize = new Sequelize({
  dialect: 'mysql',
  ...require(path.join(__dirname, '..', 'config', 'config.json'))['development']
});

sequelize.addModels([path.join(__dirname, 'models')]);

export default sequelize;
