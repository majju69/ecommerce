import {createProxyMiddleware} from  "http-proxy-middleware";

export const proxy = createProxyMiddleware(
{
    target: 'http://localhost:8000/api', // target host with the same base path
    changeOrigin: true, // needed for virtual hosted sites
});