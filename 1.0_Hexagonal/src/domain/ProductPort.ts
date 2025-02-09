export interface ProductPort {
    insertProducto(title: string, category: string, stock: number): void;
    findProductByTitle(title: string): boolean;
    findProductById(productId: number): boolean;
    upProduct(productId: number, title: string, stock: number): void;
    removeProduct(productId: number): void;
}