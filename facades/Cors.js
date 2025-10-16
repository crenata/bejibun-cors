import CorsBuilder from "../builders/CorsBuilder";
export default class Cors {
    static get init() {
        return new CorsBuilder().init();
    }
}
