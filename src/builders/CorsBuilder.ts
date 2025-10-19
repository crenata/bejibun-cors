import type {EnumItem} from "@bejibun/utils/facades/Enum";
import App from "@bejibun/app";
import Enum from "@bejibun/utils/facades/Enum";
import HttpMethodEnum from "@bejibun/utils/enums/HttpMethodEnum";
import fs from "fs";
import CorsHeaderEnum from "@/enums/CorsHeaderEnum";

export type CorsHeader = {
    "Access-Control-Allow-Origin": string;
    "Access-Control-Allow-Headers": string;
    "Access-Control-Allow-Methods": string;
    "Access-Control-Expose-Headers"?: string;
    "Access-Control-Allow-Credentials"?: string;
    "Access-Control-Max-Age"?: string;
}

export default class CorsBuilder {
    protected config: any;

    public constructor() {
        const configPath = App.configPath("cors.ts");

        if (fs.existsSync(configPath)) this.config = require(configPath).default;
        else this.config = require("@/config/cors").default;
    }

    public init(): any {
        const headers: CorsHeader = {
            "Access-Control-Allow-Origin": this.config.origin,
            "Access-Control-Allow-Headers": Array.isArray(this.config.allowedHeaders)
                ? this.config.allowedHeaders.join(", ")
                : Enum.setEnums(CorsHeaderEnum).toArray().map((value: EnumItem) => value.value).join(", "),
            "Access-Control-Allow-Methods": Array.isArray(this.config.methods)
                ? this.config.methods.join(", ")
                : Enum.setEnums(HttpMethodEnum).toArray().map((value: EnumItem) => value.value).join(", ")
        };

        if (this.config.exposedHeaders.length > 0) headers["Access-Control-Expose-Headers"] = this.config.exposedHeaders.join(", ");

        if (this.config.credentials) headers["Access-Control-Allow-Credentials"] = "true";

        if (this.config.maxAge) headers["Access-Control-Max-Age"] = this.config.maxAge.toString();

        return headers;
    }
}