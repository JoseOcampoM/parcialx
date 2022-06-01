import { Request, Response, Application } from 'express';

import { Jo_grupoController } from '../controllers/Jo_grupos.controller';

export class Jo_grupoRoutes {
    public jo_grupoController: Jo_grupoController = new Jo_grupoController();
    
    public routes(app: Application): void{
        app.route("/grupos").get(this.jo_grupoController.getAllGrupo)
        app.route("/creargrupo").post(this.jo_grupoController.createGrupo)
    }
}