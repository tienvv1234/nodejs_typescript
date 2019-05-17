import * as redis from "redis";
import { promises } from "fs";
import { reject } from "bluebird";

export class cache {
    static client: redis.RedisClient;

    static async init(): Promise<void> {
        this.client = redis.createClient({
            port: Number(process.env.redisPort),
            host: process.env.redisHost
        })
    }

    static createCache(key: string, value: any): any {
        return new Promise<any>((resolve, reject) => {
            this.client.set(key, JSON.stringify(value), (error) => {
                if (error) {
                    reject(error);
                }
                resolve(value);
            })
        })
    }

    static getCache(key: string): any {
        return new Promise<any>((resolve, reject) => {
            this.client.get(key, (error, value) => {
                if (error) {
                    reject(error);
                }
                resolve(JSON.parse(value));
            });
        })
    }

    static deleteCache(key: string): any {
        return new Promise<any>((resolve, reject) => {
            this.client.del(key, (error) => {
                if (error) {
                    reject(error);
                }
                resolve(true);
            });
        })
    }
}