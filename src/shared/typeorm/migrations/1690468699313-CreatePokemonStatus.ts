
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePokemonStatus1690468699313 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: 'pokemon_status',
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
                        name: 'level',
                        type: 'int',
                    },
                    {
                        name: 'hp',
                        type: 'int',
                    },
                    {
                        name: 'attack',
                        type: 'int',
                    },
                    {
                        name: 'defense',
                        type: 'int',
                    },
                    {
                        name: 'special_attack',
                        type: 'int',
                    },
                    {
                        name: 'special_defense',
                        type: 'int',
                    },
                    {
                        name: 'critical_hit_rate',
                        type: 'int',
                    },
                    {
                        name: 'lifesteal',
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
        await queryRunner.dropTable('pokemon_status');
    }

}
