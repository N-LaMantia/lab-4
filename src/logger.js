// logger using console (npmlog doesn't work in browsers)

const HEADING = 'lab-4';
const isProduction = import.meta.env && import.meta.env.PROD;


//defining the logger object with its properties (logs all if dev)
const logger = {
    info: (prefix, message) => {
        const msg = typeof message === 'string' ? message : JSON.stringify(message);
        console.log(`[${HEADING}] INFO ${prefix}:`, msg);
    },
    verbose: (prefix, message) => {
        if (isProduction) return; // Skip verbose in prod
        const msg = typeof message === 'string' ? message : JSON.stringify(message);
        console.log(`[${HEADING}] VERBOSE ${prefix}:`, msg);
    },
    warn: (prefix, message) => {
        const msg = typeof message === 'string' ? message : JSON.stringify(message);
        console.warn(`[${HEADING}] WARN ${prefix}:`, msg);
    },
    error: (prefix, message) => {
        const msg = typeof message === 'string' ? message : JSON.stringify(message);
        console.error(`[${HEADING}] ERROR ${prefix}:`, msg);
    },
    silly: (prefix, message) => {
        if (isProduction) return; // Skip silly in prod
        const msg = typeof message === 'string' ? message : JSON.stringify(message);
        console.debug(`[${HEADING}] SILLY ${prefix}:`, msg);
    },
};

export default logger;
