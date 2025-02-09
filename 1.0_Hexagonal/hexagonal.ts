//Gestión de productos - Arquitectura Hexagonal (puertos y adaptadores)
//1. Aplicación 
class ProductApplication{
    port: ProductPort;

    constructor(adapter: ProductPort){//dan valores iniciales a los atributos u objetos
        this.port = adapter;
    }
    //guarda producto
    saveProduct(title:string, category:string, stock:number){
        //no se pueden agregar producto ya registrados y el stock debe ser mayor a 1
        const existProduct = this.port.findProductByTitle(title);
        if((!existProduct) && (stock>1)){ 
            this.port.insertProduct(title, category, stock);
            }
    }
    //actualizar producto
    updateProduct(productId:number, title:string,stock:number ){
        //Buscar que el producto que se va actualizar exista
        const existProduct = this.port.findProductById(productId);
        if(existProduct) this.port.upProduct(productId,title,stock);
    }
    //dar de baja el producto
    downdProduct(productId:number){
        const existProduct = this.port.findProductById(productId);
        if(existProduct) this.port.removeProduct;
    }
}
//2.Puertos_ abstracción o el contrato -> cubre las necesidades de Aplicación
interface ProductPort{
    insertProduct(title:string, category:string, stock:number):void;
    findProductByTitle(title:string):boolean;
    findProductById(productId:number):boolean;
    upProduct(productId:number, title:string,stock:number ):void;
    removeProduct(productId:number):void;
}
//Adaptadores->ahora hago implemtación
class ProductAdapter implements ProductPort{
    insertProduct(title: string,category: string,stock: number): void {
        console.log("Producto Agregado");
    }
    findProductByTitle(title: string): boolean {
        return false;
    }
    findProductById(productId: number): boolean {
        return true;
    }
    upProduct(productId: number,title: string,stock: number): void {
        console.log("Producto Actualizado");
    }
    removeProduct(productId: number): void {
        console.log("Producto Dado de Baja");
    }
}
class ProductController{
    app: ProductApplication;

    constructor(application: ProductApplication){
        this.app = application;

    }
    //validaciones de datos
    create(title: string,category: string,stock: number){
        if(title.length<=4) throw "EL nombre del producto debe ser mayor o igual 5 caracteres";
        if(category.length<=4) throw "La categoría del producto debe ser mayor o igual 5 caracteres";
        if(stock <=1)  throw "El stock debe ser mayor a 1";
        this.app.saveProduct(title,category,stock);
    }
    update(productId:number, title:string, stock:number){
        if(title.length<=4) throw "EL nombre del producto debe ser mayor o igual 5 caracteres";
         if(stock <=1)  throw "El stock debe ser mayor a 1";
         if(productId<=0) throw "ID Inválido update";
         this.app.updateProduct(productId,title,stock);
    }
    remove(productId:number){
        if(productId<=0) throw "ID Inválido remove";
        this.app.downdProduct(productId);

    }
}
const port: ProductPort = new ProductAdapter();
const app = new ProductApplication(port);

const controller = new ProductController(app);
controller.create("Maleta","Viaje",3);
controller.update(1,"Maletin",5);
controller.remove(10);
