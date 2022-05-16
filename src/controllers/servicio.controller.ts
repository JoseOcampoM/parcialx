import { Request, Response } from 'express';
import { Servicio, ServicioI } from '../models/Servicio';

export class ServicioController {
    public async getAllServicio(req: Request, res: Response){
        try{
            const servicio: ServicioI[] = await Servicio.findAll(
                {
                    where: {activo : true}
                }
            )
            res.status(200).json({servicio})
        } catch(error){

        }
    }

    public async getOneServicio(req: Request, res: Response){
        const { id: idParam } = req.params 
        try{
            const servicio: ServicioI | null = await Servicio.findOne(
                {
                    where: {
                        id: idParam,
                        activo: true
                    }
                }
            )

            res.status(200).json(servicio)
        } catch(error){
            res.status(500).json({msg: "Error internal"})
        }
    }

    public async createServicio(req: Request, res: Response){
        const {
            fecha,
            descripcion,
            valor,
            ClienteId,
            activo,
        } = req.body;
        try{
            let body:ServicioI = {
                fecha,
                descripcion,
                valor,
                ClienteId,
                activo,
            }

            const servicio = await Servicio.create({...body});
            res.status(200).json({servicio})
        } catch(error){

        }
    }

    public async updateServicio(req: Request, res: Response){
        const { id:pk } = req.params;

        const {
            id,
            fecha,
            descripcion,
            valor,
            ClienteId,
            activo,
        } = req.body

        try{
            let body:ServicioI = {
                fecha,
                descripcion,
                valor,
                ClienteId,
                activo,
            }

            const servicioExist: ServicioI | null = await Servicio.findByPk(pk);

            if(!servicioExist) return res.status(500).json({msg:"El servicio no existe"})
            await Servicio.update(
                body, {
                    where: {id:pk}
                }
            );

        } catch(error){

        }

        const servicio: ServicioI | null = await Servicio.findByPk(pk);
        if (servicio) return res.status(200).json({servicio})

    }

    public async deleteServicio(req: Request, res: Response){
        const { id:pk } = req.params;
        try{
            const servicioExist: ServicioI | null = await Servicio.findByPk(pk);
            if(!servicioExist) return  res.status(500).json({msg: "El Servicio no existe"})
            await Servicio.update(
                {
                    activo: false,
                },
                {
                    where: {id:pk}
                }
            );

            return res.status(200).json({msg: "Cliente Eliminado"});


        }catch(error){
            
        }
        
    }
    
     
}