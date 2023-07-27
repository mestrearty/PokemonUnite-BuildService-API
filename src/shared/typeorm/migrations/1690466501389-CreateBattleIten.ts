import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBattleIten1690466501389 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: 'battle_iten',
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
                    }
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('battle_iten');
    }

}
//gerar esse arquivo: yarn typeorm migration:create -n <Nome>
//gerar a tabela: yarn typeorm migration:run