'use strict'

module.exports = {
    'POST /hello/:name': async (ctx, next) => {
        var name = ctx.request.body.name || '';
        ctx.response.body = `<h1>Hello post, ${name}!</h1>`;
    }
};