import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export default class CriarChavesEstrangeiras1607017725911 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'entregas',
      new TableForeignKey({
        name: 'CompradorEntregas',
        columnNames: ['comprador_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'compradores',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'entregas',
      new TableForeignKey({
        name: 'FornecedorEntregas',
        columnNames: ['fornecedor_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'fornecedores',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'entregas',
      new TableForeignKey({
        name: 'MotoristaEntregas',
        columnNames: ['motorista_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'motoristas',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('entregas', 'CompradorEntregas');
    await queryRunner.dropForeignKey('entregas', 'FornecedorEntregas');
    await queryRunner.dropForeignKey('entregas', 'MotoristaEntregas');
  }
}
