export default {
  env: process.env.ENV || 'dev',
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || 3000,

  mysql: {
    host: process.env.MYSQL_HOST || '127.0.0.1',
    port: process.env.MYSQL_PORT || 33066,
  },

  cors: {
    origin: [process.env.CORS_ORIGIN] || [
      'http://localhost:4200',
      'https://localhost:4300',
      'http://localhost:5000',
    ],
    credentials: process.env.CORS_CREDENTIALS || true,
  },

  prefix: process.env.PREFIX || 'api',

  jwt: {
    secret: process.env.JWT_SECRET || 'secret',
    signOptions: { expiresIn: '1d' },
  },
} as any;
