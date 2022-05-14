import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ default: true })
  isAmbassador: boolean;
}
