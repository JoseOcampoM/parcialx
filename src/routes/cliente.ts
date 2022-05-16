import { Request, Response, Application } from 'express';

import { ClienteController} from '../controllers/cliente.controller';

export class ClienteRoutes {
    public clienteController: ClienteController = new ClienteController();
    
    public routes(app: Application): void{
        app.route("/clientes").get(this.clienteController.getAllCliente)
        app.route("/cliente/:id").get(this.clienteController.getOneCliente)
        app.route("/crearcliente").post(this.clienteController.createCliente)
        app.route("/actuacliente/:id").patch(this.clienteController.updateCliente)
        app.route("/delcliente/:id").patch(this.clienteController.deleteCliente)

    }
}