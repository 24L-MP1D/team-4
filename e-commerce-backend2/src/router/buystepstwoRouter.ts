import express from 'express'
import { buystepstwo } from "../controller /buystepstwo";
const buystepstwoRouter = express.Router()
buystepstwoRouter.post('/buyStepTwo', buystepstwo)
export {buystepstwoRouter}