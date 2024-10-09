import express, { Request, Response } from 'express';
import { buyStep } from '../model/buyStepModel';
const buystepstwo =
    async (req: Request, res: Response) => {
        try {
            const { values } = req.body;
            const buyStepTwo = await buyStep.create({ values })
            res.sendStatus(200);
        } catch (error) {
            console.error(error)
            res.sendStatus(400);
        }
    }

export { buystepstwo }