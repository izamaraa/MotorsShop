import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";

import { User } from "./user.entity";
import { Vehicle } from "./vehicle.entity";

@Entity("comments")
export class Comment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  comment: string;

  @CreateDateColumn()
  dateCreated: Date;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.comments)
  vehicle: Vehicle;

  @ManyToOne(() => User, (user) => user.comments, { eager: true })
  user: User;
}
