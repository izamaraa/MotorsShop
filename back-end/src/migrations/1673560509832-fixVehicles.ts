import { MigrationInterface, QueryRunner } from "typeorm";

export class fixVehicles1673560509832 implements MigrationInterface {
    name = 'fixVehicles1673560509832'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "color"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "UQ_ec7181ebdab798d97070122a5bf"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "plate"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "plate" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "UQ_ec7181ebdab798d97070122a5bf" UNIQUE ("plate")`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "color" character varying(15) NOT NULL`);
    }

}
