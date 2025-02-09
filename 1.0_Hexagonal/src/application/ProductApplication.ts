import { ProductPort } from "../domain/ProductPort";

export class ProductApplication {
    private port: ProductPort;

    constructor(adapter: ProductPort) {
        this.port = adapter;
    }

    saveProduct(title: string, category: string, stock: number) {
        const existProduct = this.port.findProductByTitle(title);
        if (!existProduct) this.port.insertProducto(title, category, stock);
    }

    updateProduct(productId: number, title: string, stock: number) {
        const existProduct = this.port.findProductById(productId);
        if (existProduct) this.port.upProduct(productId, title, stock);
    }

    downdProduct(productId: number) {
        const existProduct = this.port.findProductById(productId);
        if (existProduct) this.port.removeProduct(productId);
    }
}
