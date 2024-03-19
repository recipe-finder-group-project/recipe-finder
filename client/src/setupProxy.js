const { createProxyMiddleware } = require('http-proxy-middleware');
// change it back to dep serv
module.exports = function(app) {
    const proxy = {
        target: 'http://localhost:5050',
        changeOrigin: true,
    };
    module.exports = function(app) {
        app.use(
            '/api',
            createProxyMiddleware(proxy)
        );
    };

};