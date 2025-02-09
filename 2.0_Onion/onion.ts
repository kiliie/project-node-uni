//Infrastructure
class ProductInfraestucture implements ProductRepository{
    insert(title: string, category: string, stock: number): void {
        console.log("Producto agregado");
    }
    findByIdProduct(productId: number): boolean {
        return true;
    }
    findByTitle(title: string): boolean {
        return false;
    }
    update(productId: number, title: string, stock: number): void {
        console.log("Producto actualizado");
    }
    remove(productId: number): void {
        console.log("Producto eliminado");
    }

}
//Application o aplicación
class ProcductApplication{
    // repository
    repository: ProductRepository;

    constructor(repository: ProductRepository){
        this.repository = repository;
    }

    add(title: string, category: string, stock: number){
        const existProduct = this.repository.findByTitle(title);
        if(!existProduct) this.repository.insert(title, category, stock);
    }
    up(productId: number,title: string, stock: number){
        const existProduct = this.repository.findByIdProduct(productId);
        if(existProduct) this.repository.update(productId, title, stock);
    }
    downd(productId: number){
        const existProduct = this.repository.findByIdProduct(productId);
        if(existProduct) this.repository.remove(productId);
    }
}

//Dominio
type ProductRepository ={
    insert(title: string, category: string, stock: number):void;
    findByIdProduct(productId: number): boolean;
    findByTitle(title: string): boolean;
    update(productId: number,title: string, stock: number):void;
    remove(productId: number):void;
}

class Product{
    productId: number | undefined; // unión de tipos
    title: string;
    category: string;
    stock: number;
    
    constructor(title: string, category: string, stock: number,productId?: number,){
        if (title.length < 4) throw "EL titulos debe tener al menos 4 caracteres";
        if (category.length < 4) throw "La categoría debe tener al menos 4 caracteres";
        if (stock <= 0) throw "El stock no puede ser negativo y debe ser mayor a 0";
        if (productId && productId < 0) throw "Debe ser positivo";

        this.title = title;
        this.category = category;
        this.stock = stock;

        if(productId) this.productId = productId;
    }
}

class ProductController{
    app: ProcductApplication;

    constructor(app: ProcductApplication){
        this.app = app;
    }
    create(title: string, category: string, stock: number){
       if(title == null || title.length < 4) throw "EL titulos debe tener al menos 4 caracteres"; 
       if (category.length < 4 || category == null) throw "La categoría debe tener al menos 4 caracteres";
        if (stock <= 0) throw "El stock no puede ser negativo y debe ser mayor a 0";
       
        this.app.add(title, category, stock);
    }

    update(productId: number, title: string, stock: number){
        if(productId < 0) throw "Debe ser positivo";
        if(title == null || title.length < 4) throw "EL titulos debe tener al menos 4 caracteres"; 
        if (stock <= 0) throw "El stock no puede ser negativo y debe ser mayor a 0";
        
        this.app.up(productId, title, stock);
    }

    delete(productId: number){
        if(productId < 0) throw "Debe ser positivo";
        this.app.downd(productId);
    }   
}

const repository: ProductRepository = new ProductInfraestucture();
const app = new ProcductApplication(repository);
const controller = new ProductController(app);

controller.create("Coca cola", "Bebida", 10);
controller.update(10, "Coca cola Pola", 23);
