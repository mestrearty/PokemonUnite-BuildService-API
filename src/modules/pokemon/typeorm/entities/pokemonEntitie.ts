import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('pokemon')
class PokemonEntitie {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    stage_0_name: string;

    @Column()
    stage_1_name: string;

    @Column('int')
    stage_1_lvlup: number;

    @Column()
    stage_2_name: string;

    @Column('int')
    stage_2_lvlup: number;

    @Column()
    range: string;

    @Column()
    role: string;

    @Column()
    difficulty: string;

    @Column()
    attacker_type: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default PokemonEntitie;