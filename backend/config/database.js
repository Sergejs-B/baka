module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: "mysql",
        host: env('DATABASE_HOST', 'localhost'),
        port: env('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'baka'),
        username: env('DATABASE_USERNAME', 'baka'),
        password: env('DATABASE_PASSWORD', 'password'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
