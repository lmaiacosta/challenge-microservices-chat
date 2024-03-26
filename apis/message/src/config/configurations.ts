// import { User } from '../users/user.entity';
console.log('AQUI', process.env);
export default () => ({
  NODE_ENV: process.env.NODE_ENV,
  PORT: parseInt(process.env.PORT, 10),
  TITLE: process.env.TITLE,
  KAFKA_HOST: process.env.KAFKA_HOST,
  KAFKA_PORT: parseInt(process.env.KAFKA_PORT, 10),
  database: {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ['src/**/**.entity{.ts,.js}'],
    synchronize: process.env.NODE_ENV === 'develop' ? true : false,
  },
});
