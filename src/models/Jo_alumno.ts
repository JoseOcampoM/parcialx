import { Model, DataType, DataTypes } from 'sequelize';
import { database } from '../database/db';
import { Jo_grupo } from './Jo_grupo';

export class Jo_alumno extends Model {
    public nombre!: string;
    public direccion!: string;
    public telefono!: string;
    public correo!: string;
    public Jo_grupoId!: string;
    public activo!: Boolean;
}

export interface Jo_alumnoI {
    nombre: string;
    direccion: string;
    telefono: string;
    correo: string;
    Jo_grupoId: string;
    activo: Boolean;
}

Jo_alumno.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },

        direccion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Jo_grupoId: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        activo:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    },
    {
        tableName: 'grupos',
        sequelize: database,
        timestamps: false
    }
)


Jo_alumno.hasMany(Jo_grupo);
Jo_grupo.belongsTo(Jo_alumno);