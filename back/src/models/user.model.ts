import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column
  username: string;

  @Column
  email: string;

  @Column
  phone: string;

  @Column
  address: string;

  @Column
  birthDate: Date;

  @Column
  gender: boolean;

  @Column
  role: string;
  
  @Column
  password: string;

  @Column
  rest_token: string;

  @Column
  rest_token_expires: Date;
}
