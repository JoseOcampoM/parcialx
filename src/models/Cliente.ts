import { Model, DataType, DataTypes } from 'sequelize';
import { database } from '../database/db';

export class Cliente extends Model {
    public nombre!: string;
    public correo!: string;
    public telefono!: string;
    public direccion!: string;
    public activo!: Boolean;
}

export interface ClienteI {
    nombre: string;
    correo: string;
    telefono: string;
    direccion: string;
    activo: Boolean;
}

Cliente.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },

        correo: {
            type: DataTypes.STRING,
            allowNull: false
        },

        telefono: {
            type: DataTypes.STRING,
            allowNull: false
        },

        direccion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        activo:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    },
    {
        tableName: 'clientes',
        sequelize: database,
        timestamps: true
    }
)