import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm"
import { User } from "./user.entity"

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string

  @Column({ length: 15 })
  state: string

  @Column({ length: 50 })
  city: string

  @Column({ length: 9 })
  cep: string

  @Column({ length: 50 })
  street: string

  @Column({ length: 50, nullable: true })
  number?: string

  @Column({ length: 50, nullable: true })
  complement?: string

  @OneToOne(() => User, (user) => user.address, { eager: true })
  user: User
}
