const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    const proxy = {
        target: 'https://recipe-finder-server-xgd5.onrender.com',
        changeOrigin: true,
    };
    module.exports = function(app) {
        app.use(
            '/api',
            createProxyMiddleware(proxy)
        );
    };

};