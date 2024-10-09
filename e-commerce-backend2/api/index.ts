// src/index.ts
import { buyStep } from '../src/model/buyStepModel';
import express, { Request, Response } from 'express';
import connectDB from '../src/config/db';
import { buystepstwoRouter } from '../src/router/buystepstwoRouter';
import { productDetailComment } from '../src/model/productDetailschema';
import { postProduct } from '../src/model/postproductmodel';
connectDB()

const app = express();
const port = 4000;

const cors = require('cors')
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express123!');
});

app.use(buystepstwoRouter)
app.get('/buyStepTwo', async (req: Request, res: Response) =>{
  try{
    const buyStepTwo = await buyStep.find()
    console.log(buyStepTwo)
    res.json(buyStepTwo)
  }catch(error){
    console.error(error)
    res.sendStatus(400);
  }
})

app.post('/productDetail', async (req:Request, res: Response) =>{
  try{
    const {title} = req.body;
    const productDetail = await productDetailComment.create({title})
    res.sendStatus(200);
  } catch(error){
    console.error(error);
    res.sendStatus(400);
  }
});
app.get('/productDetail', async (req: Request, res: Response) => {
  try{
    const productDetail = await productDetailComment.find()
    res.json(productDetail)
  }catch(error){
    res.sendStatus(400);
  }
})

app.get('/postProducts', async (req: Request, res: Response) => {
  try{
    const postProducts = await postProduct.find()
    res.json(postProducts)
  }catch(error){
    res.sendStatus(400);
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



