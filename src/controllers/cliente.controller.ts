import { Request, Response } from 'express';
import { Cliente, ClienteI } from '../models/Cliente';

export class ClienteController {
    public async getAllCliente(req: Request, res: Response){
        try{
            const cliente: ClienteI[] = await Cliente.findAll(
                {
                    where: {activo : true}
                }
            )
            res.status(200).json({cliente})
        } catch(error){

        }
    }

    public async getOneCliente(req: Request, res: Response){
        const { id: idParam } = req.params 
        try{
            const cliente: ClienteI | null = await Cliente.findOne(
                {
                    where: {
                        id: idParam,
                        activo: true
                    }
                }
            )

            res.status(200).json(cliente)
        } catch(error){
            res.status(500).json({msg: "Error internal"})
        }
    }

    public async createCliente(req: Request, res: Response){
        const {
            nombre,
            correo,
            telefono,
            direccion,
            activo
        } = req.body;
        try{
            let body:ClienteI = {
                nombre,
                correo,
                telefono,
                direccion,
                activo
            }

            const cliente = await Cliente.create({...body});
            res.status(200).json({cliente})
        } catch(error){

        }
    }

    public async updateCliente(req: Request, res: Response){
        const { id:pk } = req.params;

        const {
            id,
            nombre,
            correo,
            telefono,
            direccion,
            activo
        } = req.body

        try{
            let body:ClienteI = {
                nombre,
                correo,
                telefono,
                direccion,
                activo
            }

            const clienteExist: ClienteI | null = await Cliente.findByPk(pk);

            if(!clienteExist) return res.status(500).json({msg:"El cliente no existe"})
            await Cliente.update(
                body, {
                    where: {id:pk}
                }
            );

        } catch(error){

        }

        const cliente: ClienteI | null = await Cliente.findByPk(pk);
        if (cliente) return res.status(200).json({cliente})

    }

    public async deleteCliente(req: Request, res: Response){
        const { id:pk } = req.params;
        try{
            const clienteExist: ClienteI | null = await Cliente.findByPk(pk);
            if(!clienteExist) return  res.status(500).json({msg: "El Cliente no existe"})
            await Cliente.update(
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