import { ClienteRoutes } from "./cliente";
import { ServicioRoutes } from "./servicio";


export class Routes {
    public clienteRoutes: ClienteRoutes = new ClienteRoutes();
    public servicioRoutes: ServicioRoutes = new ServicioRoutes();
}