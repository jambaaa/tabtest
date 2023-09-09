import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Users extends Model<Users> {
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  address: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  birthDate: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  gender: boolean;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  role: string;
  
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  rest_token: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  rest_token_expires: Date;
}
