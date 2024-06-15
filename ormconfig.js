module.exports = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: true,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migration/*.js'],
    subscribers: ['dist/subscriber/*.js'],
    cli: {
      entitiesDir: 'src',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber',
    },
  };
  