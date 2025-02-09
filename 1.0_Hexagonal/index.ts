import { ProductAdapter } from "./src/infrastructure/ProductAdapter";
import { ProductApplication } from "./src/application/ProductApplication";
import { ProductController } from "./src/infrastructure/ProdcutController";

const port = new ProductAdapter();
const app = new ProductApplication(port);
const controller = new ProductController(app);

// Ejemplo de uso
controller.create("Carro", "Nuevo", 5);
controller.update(1, "Bicicleta", 10);
controller.remove(1);