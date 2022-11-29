import { Prisma } from "@prisma/client";
import { GenericsRepository } from "./GenericsRepository";
import { Refrigerator } from "../../entities/Refrigerator";
import { ProductsRepository } from "./ProductsRepository";
import {
  ICreateOrUpdateRefrigeratorDTO,
  IRefrigeratorsRepository,
} from "../IRefrigeratorsRepository";

class RefrigeratorsRepository implements IRefrigeratorsRepository {
  private repository: GenericsRepository<Refrigerator>;
  private productsRepository: ProductsRepository;

  constructor() {
    this.repository = new GenericsRepository();
    this.repository.setModel(this.repository.prisma.refrigerator);
    this.productsRepository = new ProductsRepository();
  }

  async create(data: ICreateOrUpdateRefrigeratorDTO): Promise<Refrigerator> {
    const {
      product,
      color,
      doorType,
      snowBreakType,
      brand,
      voltage,
      capacity,
    } = data;

    const createRefrigerator =
      await this.repository.create<Prisma.RefrigeratorCreateArgs>({
        data: {
          product: this.productsRepository.createOrUpdate(product),
          color,
          doorType,
          snowBreakType,
          brand,
          voltage,
          capacity,
        },
        include: this.productsRepository.includeForChildren(),
      });
    return createRefrigerator;
  }

  update(
    id: string,
    data: ICreateOrUpdateRefrigeratorDTO
  ): Promise<Refrigerator> {
    const {
      product,
      color,
      doorType,
      snowBreakType,
      brand,
      voltage,
      capacity,
    } = data;

    const updateRefrigerator = this.repository.update<
      Prisma.RefrigeratorUpdateInput,
      Prisma.RefrigeratorInclude
    >(
      id,
      {
        product: this.productsRepository.createOrUpdate(product),
        color,
        doorType,
        snowBreakType,
        brand,
        voltage,
        capacity,
      },
      { ...this.productsRepository.includeForChildren() }
    );
    return updateRefrigerator;
  }
}

export { RefrigeratorsRepository };
