import * as express from "express";
import {mainHandler} from '../handler/main.handler'

class MainRoute {
    public router: express.Router = express.Router();

    constructor() {
        this.config();
    }

    private config(): void {
        this.router.get("/", (req: express.Request, res: express.Response) => mainHandler.root(req, res));
    }
}

export const mainRoute = new MainRoute().router;
