import { PrismaClient } from "@prisma/client";

export class GenericsRepository<T> {
  prisma: PrismaClient = new PrismaClient();
  model: any;

  setModel(model: any) {
    this.model = model;
  }

  async findAll<FindManyArgs>(options?: FindManyArgs): Promise<T[]> {
    const allObjects = await this.model.findMany(options);
    return allObjects;
  }

  async create<CreateArgs>(args: CreateArgs): Promise<T> {
    const newObject = await this.model.create(args);
    return newObject;
  }

  async findById<FindUniqueArgs>(
    id: string,
    options?: FindUniqueArgs
  ): Promise<T> {
    const object = await this.model.findUnique({
      where: { id },
      options,
    });
    return object;
  }

  async update<UpdateInput, UpdateOptions>(
    id: string,
    args: UpdateInput,
    options?: UpdateOptions
  ): Promise<T> {
    const updatedObject = await this.model.update({
      where: { id },
      args,
      options,
    });
    return updatedObject;
  }

  async delete(id: string): Promise<void> {
    await this.model.delete({
      where: { id },
    });
  }
}
