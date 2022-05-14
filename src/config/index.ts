export default {
  env: process.env.ENV || 'dev',
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || 3000,

  mysql: {
    host: process.env.MYSQL_HOST || '127.0.0.1',
    port: process.env.MYSQL_PORT || 33066,
  },
} as any;
