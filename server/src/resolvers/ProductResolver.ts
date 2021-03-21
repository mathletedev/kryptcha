import { Query, Resolver } from "type-graphql";
import { Product } from "../entities/Product";

@Resolver()
export class ProductResolver {
	@Query(() => [Product])
	async products() {
		return await Product.find();
	}
}
