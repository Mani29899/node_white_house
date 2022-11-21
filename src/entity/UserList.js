
export default (sequelize, DataTypes) => {
    const UserList = sequelize.define('UserList', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: false,
            autoIncrement: true
        },
        firstName: {
            field: 'firstname',
            type: DataTypes.STRING(100),
        },
        lastName: {
            field: 'lastname',
            type: DataTypes.STRING(100),
        },
        userName: {
            field: 'username',
            type: DataTypes.STRING(100),
        },
        email: {
            field: 'email',
            type: DataTypes.STRING(100),
        },
        city: {
            field: 'city',
            type: DataTypes.STRING(100),
        },
        country: {
            field: 'country',
            type: DataTypes.STRING(70),
        },
        skype: {
            field: 'skype',
            type: DataTypes.STRING(100),
        },
        whatsapp: {
            field: 'whatsapp',
            type: DataTypes.STRING(15),
        },
        telegram: {
            field: 'telegram',
            type: DataTypes.STRING(100),
        },
        facebook: {
            field: 'facebook',
            type: DataTypes.STRING(100),
        },
        instagram: {
            field: 'instagram',
            type: DataTypes.STRING(100),
        },
        createdAt: {
            field:'created_at',
            type:DataTypes.DATE
        },
        updatedAt: {
            field:'updated_at',
            type:DataTypes.DATE
        }
    }, {
        tableName: 'user_list',
        timestamps: false,
        underscored: true,
        
        classMethods: {

        }
    });

    return UserList;
}