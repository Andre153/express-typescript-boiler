import { Request, Response } from "express";

export class MainHandler {

    constructor() {}

    public root(req: Request, res: Response) {
        res.status(200).send({
            message: "GET request successful!!"
        });
    }
}

export const mainHandler = new MainHandler();
