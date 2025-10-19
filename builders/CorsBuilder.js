import App from "@bejibun/app";
import Enum from "@bejibun/utils/facades/Enum";
import HttpMethodEnum from "@bejibun/utils/enums/HttpMethodEnum";
import fs from "fs";
import CorsHeaderEnum from "../enums/CorsHeaderEnum";
export default class CorsBuilder {
    config;
    constructor() {
        const configPath = App.configPath("cors.ts");
        if (fs.existsSync(configPath))
            this.config = require(configPath).default;
        else
            this.config = require("../config/cors").default;
    }
    init() {
        const headers = {
            "Access-Control-Allow-Origin": this.config.origin,
            "Access-Control-Allow-Headers": Array.isArray(this.config.allowedHeaders)
                ? this.config.allowedHeaders.join(", ")
                : Enum.setEnums(CorsHeaderEnum).toArray().map((value) => value.value).join(", "),
            "Access-Control-Allow-Methods": Array.isArray(this.config.methods)
                ? this.config.methods.join(", ")
                : Enum.setEnums(HttpMethodEnum).toArray().map((value) => value.value).join(", ")
        };
        if (this.config.exposedHeaders.length > 0)
            headers["Access-Control-Expose-Headers"] = this.config.exposedHeaders.join(", ");
        if (this.config.credentials)
            headers["Access-Control-Allow-Credentials"] = "true";
        if (this.config.maxAge)
            headers["Access-Control-Max-Age"] = this.config.maxAge.toString();
        return headers;
    }
}
