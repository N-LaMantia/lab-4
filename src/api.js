import axios from 'axios';
import logger from './logger';

// Create a central axios instance so we can add interceptors for logging
// Point requests at the API server (configure with VITE_API_SERVER)
const API_SERVER = import.meta.env.VITE_API_SERVER || 'http://localhost:3000';
const api = axios.create({
    baseURL: API_SERVER,
    timeout: 5000,
});

// where to send logs (server)
const LOG_SERVER = import.meta.env.VITE_LOG_SERVER || 'http://localhost:3000';

function postLog(payload) {
    // fire-and-forget; don't block requests
    try {
        fetch(`${LOG_SERVER}/api/logs`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        }).catch(() => { });
    }
    catch {
        // ignore
    }
}

// Request logging
api.interceptors.request.use((config) => {
    const info = { method: config.method, url: config.url, params: config.params, data: config.data };
    logger.verbose('request', info);
    postLog({ type: 'request', ...info });
    return config;
}, (error) => {
    logger.error('request-error', error.message || error);
    return Promise.reject(error);
});

// Response logging
api.interceptors.response.use((response) => {
    const info = { url: response.config.url, status: response.status, data: response.data };
    logger.verbose('response', info);
    postLog({ type: 'response', ...info });
    return response;
}, (error) => {
    if (error.response) {
        const info = { url: error.response.config.url, status: error.response.status, data: error.response.data };
        logger.error('response-error', info);
        postLog({ type: 'response-error', ...info });
    } else {
        logger.error('response-error', error.message || error);
    }
    return Promise.reject(error);
});

export default api;
