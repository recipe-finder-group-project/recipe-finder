const { createProxyMiddleware } = require('http-proxy-middleware');

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