import { Request, Response } from 'express';
import { Jo_alumno, Jo_alumnoI } from '../models/Jo_alumno';

export class Jo_alumnoController {
    public async getAllAlumno(req: Request, res: Response){
        try{
            const alumno: Jo_alumnoI[] = await Jo_alumno.findAll(
                {
                    where: {activo : true}
                }
            )
            res.status(200).json({alumno})
        } catch(error){

        }
    }

    public async createAlumno(req: Request, res: Response){
        const {
            nombre,
            direccion,
            telefono,
            correo,
            Jo_grupoId,
            activo
        } = req.body;
        try{
            let body:Jo_alumnoI = {
                nombre,
                direccion,
                telefono,
                correo,
                Jo_grupoId,
                activo
            }

            const alumno = await Jo_alumno.create({...body});
            res.status(200).json({alumno})
        } catch(error){

        }
    }     
}