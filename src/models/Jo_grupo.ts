import { Model, DataType, DataTypes } from 'sequelize';
import { database } from '../database/db';

export class Jo_grupo extends Model {
    public nombre!: string;
    public salon!: string;
    public activo!: Boolean;
}

export interface Jo_grupoI {
    nombre: string;
    salon: string;
    activo: Boolean;
}

Jo_grupo.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },

        salon: {
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
        tableName: 'grupos',
        sequelize: database,
        timestamps: false
    }
)