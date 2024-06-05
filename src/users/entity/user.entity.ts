import { GenderType } from 'src/enums';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  lastName: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'enum', enum: Object.values(GenderType) })
  gender: string;

  @Column({ type: 'boolean' })
  hasIssues: boolean;
}
