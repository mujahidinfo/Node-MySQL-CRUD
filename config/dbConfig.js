module.exports = {
  HOST: process.env.HOST,
  USER: process.env.USERNAME,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DATABASE,
  PORT: process.env.PORT,
  DB_URL: process.env.DATABASE_URL,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true,
    },
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
