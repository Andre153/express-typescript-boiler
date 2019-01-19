import * as express from "express";
import * as bodyParser from "body-parser";
import {mainRoute} from './routes/MainRoute'

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.configureRoutes()
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private configureRoutes(): void {
        this.app.use('/', mainRoute)
    }


}

export default new App().app;