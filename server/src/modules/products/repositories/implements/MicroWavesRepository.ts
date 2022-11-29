import { Prisma } from "@prisma/client";
import { GenericsRepository } from "./GenericsRepository";
import { MicroWave } from "../../entities/MicroWave";
import { ProductsRepository } from "./ProductsRepository";
import {
  ICreateOrUpdateMicroWaveDTO,
  IMicroWavesRepository,
} from "../IMicroWavesRepository";

class MicroWavesRepository implements IMicroWavesRepository {
  private repository: GenericsRepository<MicroWave>;
  private productsRepository: ProductsRepository;

  constructor() {
    this.repository = new GenericsRepository();
    this.repository.setModel(this.repository.prisma.microWave);
    this.productsRepository = new ProductsRepository();
  }

  async create(data: ICreateOrUpdateMicroWaveDTO): Promise<MicroWave> {
    const { product, color, brand, voltage, capacity } = data;

    const createMicroWave =
      await this.repository.create<Prisma.MicroWaveCreateArgs>({
        data: {
          product: this.productsRepository.createOrUpdate(product),
          color,
          brand,
          voltage,
          capacity,
        },
        include: this.productsRepository.includeForChildren(),
      });
    return createMicroWave;
  }

  update(id: string, data: ICreateOrUpdateMicroWaveDTO): Promise<MicroWave> {
    const { product, color, brand, voltage, capacity } = data;

    const updateMicroWave = this.repository.update<
      Prisma.MicroWaveUpdateInput,
      Prisma.MicroWaveInclude
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
    return updateMicroWave;
  }
}

export { MicroWavesRepository };
