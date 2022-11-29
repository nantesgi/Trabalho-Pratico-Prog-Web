import { Prisma } from "@prisma/client";
import { GenericsRepository } from "./GenericsRepository";
import { Product } from "../../entities/Product";
import { ICreateOrUpdateProductDTO } from "../IProductsRepository";

export class ProductsRepository {
  private repository: GenericsRepository<Product>;

  constructor() {
    this.repository = new GenericsRepository();
    this.repository.setModel(this.repository.prisma.product);
  }

  createOrUpdate(product: ICreateOrUpdateProductDTO) {
    const { photo, name, department, description, stock, unitPrice } = product;

    return {
      create: {
        photo,
        name,
        department: {
          connectOrCreate: {
            where: {
              name: department?.name,
            },
            create: {
              name: department!.name,
            },
          },
        },
        description,
        stock,
        unitPrice,
      },
    };
  }

  includeForChildren() {
    return {
      product: {
        include: { department: true },
      },
    };
  }

  async filterProducts(data?: string, query?: Object): Promise<Product[]> {
    const OR = data?.split(" ").map((data) => {
      const object = {
        OR: [
          { name: { contains: data, mode: "insensitive" } },
          { description: { contains: data, mode: "insensitive" } },
        ],
      };
      return object;
    });
    const searchField = { OR };
    const queryObj = { ...query };
    let queryStr = JSON.stringify(queryObj);

    const products = await this.repository.findAll<Prisma.ProductFindManyArgs>({
      where: {
        ...searchField,
        ...JSON.parse(queryStr),
      },
      include: { department: true },
    });
    return products;
  }

  async findById(id: string): Promise<Product> {
    const findProductById = await this.repository.findById<Prisma.ProductArgs>(
      id,
      { include: { department: true } }
    );
    return findProductById;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
