import type { CorsHeader } from "../builders/CorsBuilder";
export type { CorsHeader };
export default class Cors {
    static get init(): CorsHeader;
}
