import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Vehicle } from './vehicle.entity';

@Entity('images')
export class Images {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column()
    image: string;

    @ManyToOne(() => Vehicle, (vehicle) => vehicle.images, { eager: true })
    vehicle: Vehicle;
}
