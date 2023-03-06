const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(    
    createProxyMiddleware('/api',{
      target: 'http://localhost:9443',
      changeOrigin: true,
    })
  );
};