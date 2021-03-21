import { ObjectID } from "mongodb";
import { Field, Float, ID, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ObjectIdColumn } from "typeorm";

@ObjectType()
@Entity()
export class Product extends BaseEntity {
	@Field(() => ID)
	@ObjectIdColumn()
	id: ObjectID;

	@Field()
	@Column()
	name: string;

	@Field()
	@Column()
	description: string;

	@Field(() => Float)
	@Column()
	price: number;

	@Field(() => Int)
	@Column()
	stock: number;
}
