import {
    Sequelize
} from 'sequelize';
import dbConfig from '../config/dbConfig.js';
import RegisterUser from './RegisterUser.js';
import UserList from './UserList.js';

if (!dbConfig || !dbConfig.sql) {
    console.log("no database configuration availabhle and its not connected");
}

const databBaseConfiguration = dbConfig.sql;

var db = {
    sequelize: new Sequelize(
        databBaseConfiguration.database,
        databBaseConfiguration.username,
        databBaseConfiguration.password, {
            host: databBaseConfiguration.host,
            dialect: databBaseConfiguration.dialect,
        }
    )
}
db.RegisterUser = RegisterUser(db.sequelize, Sequelize.DataTypes);
db.UserList = UserList(db.sequelize ,Sequelize.DataTypes);
db.Query = db.sequelize;




export default db;