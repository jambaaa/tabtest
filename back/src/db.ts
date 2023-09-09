import { Sequelize } from 'sequelize-typescript';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const configPath = join(__dirname, '..', 'config', 'config.json');
const configContent = readFileSync(configPath, 'utf8');
const config = JSON.parse(configContent)['development'];

const sequelize = new Sequelize({
  dialect: 'mysql',
  ...config
});

import { Users } from './models/user.model';
sequelize.addModels([Users]);

export default sequelize;
