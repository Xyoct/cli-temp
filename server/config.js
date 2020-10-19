module.exports = {
    port: 3030,
    dbConfig: {
        host: 'localhost',
        user: 'root',
        password: 'xuyue123',
        database: 'XYTEST'
    },
    corsConfig: {
        origin: "*",
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
        maxAge: 5,
        credentials: true,
        allowMethods: ['GET', 'POST', 'DELETE'],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
      }
}