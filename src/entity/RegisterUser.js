
export default (sequelize, DataTypes) => {
    const RegisterUser = sequelize.define('RegisterUser', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: false,
            autoIncrement: true
        },
        email: {
            field: 'email',
            type: DataTypes.STRING(150),
        },
        userName: {
            field: 'username',
            type: DataTypes.STRING(30)
        }
    }, {
        tableName: 'register_user',
        timestamps: false,
        underscored: true,
        
        classMethods: {

        }
    });

    return RegisterUser;
}