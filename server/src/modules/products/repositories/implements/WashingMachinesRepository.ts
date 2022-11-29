import { Prisma } from "@prisma/client";
import { GenericsRepository } from "./GenericsRepository";
import { WashingMachine } from "../../entities/WashingMachine";
import { ProductsRepository } from "./ProductsRepository";
import {
  ICreateOrUpdateWashingMachineDTO,
  IWashingMachinesRepository,
} from "../IWashingMachinesRepository";

class WashingMachinesRepository implements IWashingMachinesRepository {
  private repository: GenericsRepository<WashingMachine>;
  private productsRepository: ProductsRepository;

  constructor() {
    this.repository = new GenericsRepository();
    this.repository.setModel(this.repository.prisma.washingMachine);
    this.productsRepository = new ProductsRepository();
  }

  async create(
    data: ICreateOrUpdateWashingMachineDTO
  ): Promise<WashingMachine> {
    const { product, color, brand, voltage, capacity } = data;

    const createWashingMachine =
      await this.repository.create<Prisma.WashingMachineCreateArgs>({
        data: {
          product: this.productsRepository.createOrUpdate(product),
          color,
          brand,
          voltage,
          capacity,
        },
        include: this.productsRepository.includeForChildren(),
      });
    return createWashingMachine;
  }

  update(
    id: string,
    data: ICreateOrUpdateWashingMachineDTO
  ): Promise<WashingMachine> {
    const { product, color, brand, voltage, capacity } = data;

    const updateWashingMachine = this.repository.update<
      Prisma.WashingMachineUpdateInput,
      Prisma.WashingMachineInclude
    >(
      id,
      {
        product: this.productsRepository.createOrUpdate(product),
        color,
        brand,
        voltage,
        capacity,
      },
      { ...this.productsRepository.includeForChildren() }
    );
    return updateWashingMachine;
  }
}

export { WashingMachinesRepository };
