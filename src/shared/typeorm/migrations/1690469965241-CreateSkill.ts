import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSkill1690469965241 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: 'skill',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'pokemon_id',
                        type: 'uuid',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'cooldown',
                        type: 'decimal',
                        precision: 10,
                        scale: 2,
                    },
                    {
                        name: 'type',
                        type: 'varchar',
                    },
                    {
                        name: 'learn_level',
                        type: 'int',
                    },
                ], foreignKeys: [
                    {
                        name: 'pokemon_id_fk',
                        referencedTableName: 'pokemon',
                        referencedColumnNames: ['id'],
                        columnNames: ['pokemon_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('skill');
    }

}
