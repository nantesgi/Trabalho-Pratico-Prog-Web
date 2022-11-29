import { Prisma } from "@prisma/client";
import { GenericsRepository } from "./GenericsRepository";
import { Laptop } from "../../entities/Laptop";
import { ProductsRepository } from "./ProductsRepository";
import {
  ICreateOrUpdateLaptopDTO,
  ILaptopsRepository,
} from "../ILaptopsRepository";

class LaptopsRepository implements ILaptopsRepository {
  private repository: GenericsRepository<Laptop>;
  private productsRepository: ProductsRepository;

  constructor() {
    this.repository = new GenericsRepository();
    this.repository.setModel(this.repository.prisma.laptop);
    this.productsRepository = new ProductsRepository();
  }

  async create(data: ICreateOrUpdateLaptopDTO): Promise<Laptop> {
    const {
      product,
      brand,
      processor,
      operationalSystem,
      storageSystem,
      storageCapacity,
    } = data;

    const createLaptop = await this.repository.create<Prisma.LaptopCreateArgs>({
      data: {
        product: this.productsRepository.createOrUpdate(product),
        brand,
        processor,
        operationalSystem,
        storageSystem,
        storageCapacity,
      },
      include: this.productsRepository.includeForChildren(),
    });
    return createLaptop;
  }

  update(id: string, data: ICreateOrUpdateLaptopDTO): Promise<Laptop> {
    const {
      product,
      brand,
      processor,
      operationalSystem,
      storageSystem,
      storageCapacity,
    } = data;

    const updateLaptop = this.repository.update<
      Prisma.LaptopUpdateInput,
      Prisma.LaptopInclude
    >(
      id,
      {
        product: this.productsRepository.createOrUpdate(product),
        brand,
        processor,
        operationalSystem,
        storageSystem,
        storageCapacity,
      },
      { ...this.productsRepository.includeForChildren() }
    );
    return updateLaptop;
  }
}

export { LaptopsRepository };
