import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePokemon1690394587761 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: 'pokemon',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'stage_0_name',
                        type: 'varchar',
                    },
                    {
                        name: 'stage_1_name',
                        type: 'varchar',
                    },
                    {
                        name: 'stage_1_lvlup',
                        type: 'int',
                    },
                    {
                        name: 'stage_2_name',
                        type: 'varchar',
                    },
                    {
                        name: 'stage_2_lvlup',
                        type: 'int',
                    },
                    {
                        name: 'range',
                        type: 'varchar',
                    },
                    {
                        name: 'role',
                        type: 'varchar',
                    },
                    {
                        name: 'difficulty',
                        type: 'varchar',
                    },
                    {
                        name: 'attacker_type',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    },
                ],
            }),
        );
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pokemon');
    }

}

//gerar esse arquivo: yarn typeorm migration:create -n <Nome>
//gerar a tabela: yarn typeorm migration:run