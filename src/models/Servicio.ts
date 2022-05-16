import { Model, DataType, DataTypes } from 'sequelize';
import { database } from '../database/db';
import { Cliente } from './Cliente';

export class Servicio extends Model {
    public fecha!: Date;
    public descripcion!: string;
    public valor!: number;
    public ClienteId!: number;
    public activo!: Boolean;
}

export interface ServicioI {
    fecha: Date;
    descripcion: string;
    valor: number;
    ClienteId: number;
    activo: Boolean;
}

Servicio.init(
    {
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },

        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },

        valor: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        activo:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    },
    {
        tableName: 'servicios',
        sequelize: database,
        timestamps: true
    }
)


Cliente.hasMany(Servicio);
Servicio.belongsTo(Cliente);