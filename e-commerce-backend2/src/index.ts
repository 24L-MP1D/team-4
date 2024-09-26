// src/index.ts
import express, {Request, Response} from 'express';
import connectDB from "../config/db"
import { productDetail } from './model/productDetailschema';
const app = express();
const port = 4000;
connectDB();
const cors = require('cors');
app.use(cors());
app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express123!');
});

app.post('/productDetail', async (req:Request, res: Response) =>{
  try{
    const {title} = req.body;
    const productDetails = await productDetail.create({title})
    res.sendStatus(200);
  } catch(error){
    console.error(error);
    res.sendStatus(400);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
