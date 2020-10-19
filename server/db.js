var mysql = require('mysql')
var config = require('./config')

let pool = mysql.createPool({
    host: config.dbConfig.host,
    user: config.dbConfig.user,
    password: config.dbConfig.password,
    database: config.dbConfig.database
})


function query(sql, values = null) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                reject( err )
            } else {
                connection.query(sql, values, ( err, results) => {
                    if ( err )   reject( err )
                    else  resolve( results )
                    connection.release();
                })
            }
        })
    })
}

module.exports = query