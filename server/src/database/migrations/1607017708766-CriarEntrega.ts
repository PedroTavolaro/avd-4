import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CriarEntrega1607017708766 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'entregas',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'data_entrega',
            type: 'timestamp with time zone',
            isNullable: true,
          },
          {
            name: 'comprador_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'fornecedor_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'motorista_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'sucata',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('entregas');
  }
}
