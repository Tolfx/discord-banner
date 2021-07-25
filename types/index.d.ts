import { User } from "discord.js";

declare module "discord.js" {
    export interface ClientUser
    {
        /**
         * 
         * @param {String} clientId 
         * @returns Promise<String|null>
         * @description Gives the banner from the user id.
         * @deprecated
         */
        getUserBanner(clientId?: string): Promise<string|null>
        /**
         * 
         * @param {String} clientId 
         * @returns Promise<String|null>
         * @description Gives the banner from the user id.
         */
        bannerURL(clientId?: string): Promise<string|null>
    }

    export interface User
    {
        /**
         * 
         * @param {String} clientId 
         * @returns Promise<String|null>
         * @description Gives the banner from the user id.
         * @deprecated
         */
        getUserBanner(clientId?: string): Promise<string|null>
        /**
         * 
         * @param {String} clientId 
         * @returns Promise<String|null>
         * @description Gives the banner from the user id.
         */
        bannerURL(clientId?: string): Promise<string|null>
    }
}

export class ExtendedUser extends User
{
    getUserBanner(clientId?: string): Promise<string|null>
}

export function GetUserBanner(clientId: string, options: {token:string}): Promise<string|null>

export interface ICacher
{
    [clientId: string]: {
        bannerUrl: string,
        cachedAt: Date
    };
}

export const Cacher = new Map<keyof ICacher, ICacher[keyof ICacher]>();

export const CacheGeneral = new Map<"token", string>();

export function banner_url<user extends string>(userId: user): `https://cdn.discordapp.com/banners/${user}/`;

export function reCache(userId: string): Boolean;

export function CacheBanner(userId: string, bannerUrl: string): void;

declare module "discord-banner"
{
    export default function (token?: string, options?: {
        cacheTime: number = 15*60*1000
    }): void
}