export type CorsHeader = {
    "Access-Control-Allow-Origin": string;
    "Access-Control-Allow-Headers": string;
    "Access-Control-Allow-Methods": string;
    "Access-Control-Expose-Headers"?: string;
    "Access-Control-Allow-Credentials"?: string;
    "Access-Control-Max-Age"?: string;
};
export default class CorsBuilder {
    protected config: any;
    constructor();
    init(): any;
}
