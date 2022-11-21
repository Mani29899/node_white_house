export default dbconfig();

function dbconfig() {
    return {
        sql: {
            host: "localhost",
            database: "white_house_login",
            username: "root",
            password: "root",
            dialect: "mysql",
            logging: true,
            maxConcurrentQueries: 1000,
            omitNull: true,
            native: true,
            language: "en",
            port:8081
        }
    }
}