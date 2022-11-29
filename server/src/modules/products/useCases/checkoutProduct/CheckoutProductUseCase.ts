import { CheckoutProduct } from "../../entities/CheckoutProduct";
import { Product } from "../../entities/Product";
import { GenericsRepository } from "../../repositories/implements/GenericsRepository";

interface IRequest extends Product {
  quantity: number;
}

class CheckoutProductUseCase {
  constructor(private repository: GenericsRepository<Product>) {}

  async checkout(data: IRequest[], userId: string) {
    const bag = await this.repository.prisma.$transaction(async (prisma) => {
      const productsNotInStock: any = [];

      await Promise.all(
        data.map(
          async (data) =>
            await prisma.product.update({
              data: {
                stock: {
                  decrement: data.quantity,
                },
              },
              where: {
                id: data.id,
              },
            })
        )
      ).then((data) =>
        data.forEach((product) => {
          if (product.stock < 0) productsNotInStock.push(product);
        })
      );

      if (productsNotInStock.length) {
        throw new Error(
          `Some of the products are not in stock: ${JSON.stringify(
            productsNotInStock.map((product: any) => product.name)
          )}
          `
        );
      }

      const user = await this.repository.prisma.user.findFirst({
        where: { id: userId },
      });

      if (!user) throw new Error("User not found!");

      const purchase = await this.repository.prisma.checkout.create({
        data: {
          userId: user.id,
          paymentId: user.paymentId,
        },
      });

      const products: CheckoutProduct[] = [];
      let totalPrice = 0;

      data.forEach((product) => {
        const data = new CheckoutProduct();
        data.productId = product.id;
        data.checkoutId = purchase.id;
        data.units = product.quantity;
        data.unitPrice = product.unitPrice;
        totalPrice += data.unitPrice;
        products.push(data);
      });

      await this.repository.prisma.checkoutProduct.createMany({
        data: [...products],
      });

      return { purchase, totalPrice };
    });

    return bag;
  }

  async execute(data: IRequest[], userId: string) {
    const checkoutPossible = await this.checkout(data, userId);
    return checkoutPossible;
  }
}

export { CheckoutProductUseCase };
