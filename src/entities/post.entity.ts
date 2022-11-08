import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('post')
export class Posts {
  // primary key になるものをレコードができ次第都度追加してくれる
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ nullable: false })
  title: string

  @Column({ nullable: false })
  description: string

  // レコードの作成日時を自動生成
  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}
