
const callbackIndex = async ctx => {
    await ctx.render('home', {
        title: "南山小居"
    })
}

module.exports = [
    {
        method: 'GET',
        path: '/',
        cbFnc: callbackIndex
    }
]