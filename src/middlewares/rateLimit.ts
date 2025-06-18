import { limitDuration, limitPoints } from "@/config";
import RateLimitException from "@/exceptions/entities/RateLimitExceptions";
import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { RateLimiterMongo } from "rate-limiter-flexible";

export async function limitRateMiddleware(req: Request, res: Response, next: NextFunction) {
    const { headers } = req;
    const ip = headers['CF-Connecting-IP'] || req.ip;
    try {
        const rateLimiter = new RateLimiterMongo({
            storeClient: mongoose.connection,
            keyPrefix: 'middleware',
            points: limitPoints,
            duration: limitDuration,
        })
        const limiterRes = await rateLimiter.consume(`${ip}`, 1);
        res.set({
            "X-RateLimit-Remaining": limiterRes.remainingPoints,
            "X-RateLimit-Limit": limitPoints,
        })
        next();
    } catch (limiterRes: any) {
        res.set({
            "X-RateLimit-Remaining": limiterRes.remainingPoints,
        })
        throw new RateLimitException();
    }
}