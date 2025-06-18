import { createLogger, format, Logger, transports } from "winston";
import { ILogger } from "./types";
import { logPath } from "@/config";

export default class Log implements ILogger {

    private static instance: Log;

    private readonly ERROR_PATH: string = `${logPath}/error.log`;
    private errorLogger: Logger;


    private constructor() {
        this.errorLogger = this.createLogger(this.ERROR_PATH, 'error');
    }

    public static getInstance(): ILogger {
        if (!Log.instance) {
            Log.instance = new Log();
        }
        return Log.instance;
    }

    addError(error: Error): void {
        this.errorLogger.error(error);
    }

    private createLogger(path: string, level: string): Logger {
        return createLogger({
            level: level,
            format: format.combine(format.timestamp(), format.json()),
            transports: [new transports.File({ filename: path })]
        });
    }
}
