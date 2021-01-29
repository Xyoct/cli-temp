
const formatCookie = function (cookie) {
	let cookieArr = cookie? cookie.split('; '): []
	let cookieObj = {}
	cookieArr.forEach(item => {
		let itemArr = item.split('=')
		cookieObj[itemArr[0]] = itemArr[1]
	});
	return cookieObj
}
function __i__(i) {
    return '\`' + i + '\`'
}

function __o__(o) {
    return "\'" + o + "\'"
}
function formatInsertSql(colObj, tableName, baseName) {
    let _baseName = baseName || require('./config').dbConfig.database
    if (!tableName) {
        return false
    }
    
    let _arr = []
    let __arr = []
    for (let i in colObj) {
        _arr.push(__i__(i))
        __arr.push(__o__(colObj[i]))
    }
    return "INSERT INTO `" + _baseName + "`.`" + tableName + "` (" + _arr.join(',') + ") VALUES (" + __arr.join(',') + ");" 
}

function formatSearchSql(key, value, tableName) {
    return "SELECT * from " + tableName + " WHERE " + key +  " LIKE '%" + value + "%';"
}

function formatUpdateSql(searchKey, searchValue, newObj, tableName) {
    let __arr = []
    for(let i in newObj) {
        __arr.push(i + "=" + __o__(newObj[i]))
    }
    return "UPDATE " + tableName + " SET " + __arr.join(",") + " WHERE " + searchKey + "=" + searchValue + ";"
}

function formatDeleteSql(deleteKey, deleteValue, tableName) {
    return "DELETE FROM " + tableName + " WHERE " + deleteKey + "='" + deleteValue + "';"
}

function ResBodySuccess(data) {
    this.code = '000000'
    this.msg = '成功'
    this.data = data || 1
}
function ResBodyFail(err) {
    this.code = '666'
    this.msg = err || '失败'
    this.data = 0
}
module.exports = {
    formatCookie: formatCookie,
    ResBodySuccess: ResBodySuccess,
    ResBodyFail: ResBodyFail,
    formatInsertSql: formatInsertSql,
    formatSearchSql: formatSearchSql,
    formatUpdateSql: formatUpdateSql,
    formatDeleteSql: formatDeleteSql
}