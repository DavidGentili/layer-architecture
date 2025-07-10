export const databaseURL: string = process.env._MONGODB_URI || 'mongodb://127.0.0.1:27017/layer-architecture';
export const privateKey: string = process.env.PRIVATE_KEY || 'Cl@V3-S3Cr3t@'


export const port: string = process.env.PORT || '8080';
export const host: string = process.env.HOST || `http://localhost:${port}`;

export const logPath: string = process.env.LOG_PATH || './logs';

export const limitPoints: number = process.env.LIMIT_POINTS ? parseInt(process.env.LIMIT_POINTS) : 100;
export const limitDuration: number = process.env.LIMIT_DURATION ? parseInt(process.env.LIMIT_DURATION) : 60000;