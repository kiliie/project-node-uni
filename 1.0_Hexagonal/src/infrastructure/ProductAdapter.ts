import { ProductPort } from "../domain/ProductPort";

export class ProductAdapter implements ProductPort {
    insertProducto(title: string, category: string, stock: number): void {
        console.log("Producto insertado:", title, category, stock);
    }

    findProductByTitle(title: string): boolean {
        return false;
    }

    findProductById(productId: number): boolean {
        return true;
    }

    upProduct(productId: number, title: string, stock: number): void {
        console.log("Producto actualizado:", productId, title, stock);
    }

    removeProduct(productId: number): void {
        console.log("Producto eliminado:", productId);
    }
}
