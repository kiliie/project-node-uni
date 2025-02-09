import { ProductApplication } from "../application/ProductApplication";

export class ProductController {
    private app: ProductApplication;

    constructor(application: ProductApplication) {
        this.app = application;
    }

    create(title: string, category: string, stock: number) {
        if (title.length < 5) throw "Título debe tener al menos 5 caracteres";
        if (category.length < 5) throw "Categoría debe tener al menos 5 caracteres";
        if (stock <= 1) throw "El stock debe ser mayor a 1";
        this.app.saveProduct(title, category, stock);
    }

    update(productId: number, title: string, stock: number) {
        if (title.length < 5) throw "Título debe tener al menos 5 caracteres";
        if (productId <= 0) throw "ID inválido";
        if (stock <= 1) throw "Stock inválido";
        this.app.updateProduct(productId, title, stock);
    }

    remove(productId: number) {
        if (productId <= 0) throw "ID inválido";
        this.app.downdProduct(productId);
    }
}
