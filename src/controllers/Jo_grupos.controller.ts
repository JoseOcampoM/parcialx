import { Request, Response } from 'express';
import { Jo_grupo, Jo_grupoI } from '../models/Jo_grupo';

export class Jo_grupoController {
    public async getAllGrupo(req: Request, res: Response){
        try{
            const grupo: Jo_grupoI[] = await Jo_grupo.findAll(
                {
                    where: {activo : true}
                }
            )
            res.status(200).json({grupo})
        } catch(error){

        }
    }

    public async createGrupo(req: Request, res: Response){
        const {
            nombre,
            salon,
            activo
        } = req.body;
        try{
            let body:Jo_grupoI = {
                nombre,
                salon,
                activo
            }

            const grupo = await Jo_grupo.create({...body});
            res.status(200).json({grupo})
        } catch(error){

        }
    }     
}