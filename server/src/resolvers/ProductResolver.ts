import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Product } from "../entities/Product";

@Resolver()
export class ProductResolver {
	@Query(() => [Product])
	async products() {
		return await Product.find();
	}

	@Mutation(() => Product!)
	async createProduct(
		@Arg("name") name: string,
		@Arg("description") description: string,
		@Arg("price") price: number,
		@Arg("stock") stock: number
	) {
		const product = Product.create({
			name,
			description,
			price,
			stock
		});
		return await product.save();
	}

	@Query(() => Product!, { nullable: true })
	async findProduct(@Arg("id") id: string) {
		return await Product.findOne(id);
	}

	@Mutation(() => Product!, { nullable: true })
	async deleteProduct(@Arg("id") id: string) {
		const product = await Product.findOne(id);
		if (product) {
			await Product.delete(id);
			return product;
		}
		return null;
	}

	@Mutation(() => Product!, { nullable: true })
	async updateProduct(
		@Arg("id") id: string,
		@Arg("name") name: string,
		@Arg("description") description: string,
		@Arg("price") price: number,
		@Arg("stock") stock: number
	) {
		let product = await Product.findOne(id);
		if (product) {
			product.name = name;
			product.description = description;
			product.price = price;
			product.stock = stock;
			return await product.save();
		}
		return null;
	}
}
