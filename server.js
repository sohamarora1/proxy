const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy endpoint
app.use('/api', createProxyMiddleware({
    target: 'https://adora-t8e8.onrender.com', // Your backend server
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // Removes `/api` prefix when forwarding to backend
    },
}));

// Start the server
const PORT = 3000; // You can use any port you like
app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});