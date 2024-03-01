export const databaseURL: string = process.env._MONGODB_URI || 'mongodb://127.0.0.1:27017/layer-architecture';
export const privateKey: string = process.env.PRIVATE_KEY || 'Cl@V3-S3Cr3t@'


export const port: string = process.env.PORT || '8080';
export const host: string = process.env.HOST || `http://localhost:${port}`;

