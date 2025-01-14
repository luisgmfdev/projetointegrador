import { Entity, PrimaryColumn, Column } from "typeorm"
import { v4 as  uuid } from "uuid"
@Entity("aula")
export default class aula {
  @PrimaryColumn()
  id_aulas: string
  @Column({ nullable: false })
  data_aula: Date
  @Column({ nullable: false })
  status_aula: string
  @Column()
  fk_turma: string
  @Column()
  fk_unidade: string
  constructor() {
    this.id_aulas=uuid()
  }
}
