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
    token: string;
}

export const Cacher = new Map<keyof ICacher, ICacher[keyof ICacher]>();

declare module "discord-banner"
{
    export default function (): void
}