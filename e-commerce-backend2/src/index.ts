// src/index.ts
import { productDetail } from './model/productDetailschema';
import express, { Request, Response, text } from 'express';
import connectDB from "../config/db"
import express, { Request, Response } from 'express';
import { postProduct } from './model/postproductmodel';
import { buyStep } from './model/buyStepModel';

connectDB();

import Multer, { memoryStorage } from "multer"
import { handleUpload } from './config/cloudinary';
const storage = memoryStorage()
const multer = Multer({ storage })

const app = express();
const port = 4000;

const cors = require('cors')
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express123!');
});

// app.post('/productDetail', async (req:Request, res: Response) =>{
//   try{
//     const {title} = req.body;
//     const productDetails = await productDetail.create({title})
//     res.sendStatus(200);
//   } catch(error){
//     console.error(error);
//     res.sendStatus(400);
//   }
// });

// app.post('/postProducts', async (req: Request, res: Response) => {
//   try {
//     const { name, text, barCode } = req.body
//     const postProducts = await postProduct.create({
//       name: name,
//       text: text,
//       BarCode: barCode
//     })
//     console.log(postProducts)
//     res.send(postProducts);
//   } catch (error) {
//     console.error(error)
//     res.sendStatus(404)
//   }
// })

app.post('/buyStepTwo', async (req: Request, res: Response) => {
  try {
    const { values } = req.body;
    const buyStepTwo = await buyStep.create({ values })
    res.sendStatus(200);
  } catch (error) {
    console.error(error)
    res.sendStatus(400);
  }
})

app.post('/uploadfile', multer.array("image"), async (req: Request, res: Response
) => {
  if (!req.file) {
    return
  }
  try {
    const b64 = Buffer.from(req.file?.buffer).toString('base64')
    const dataURI = `data:${req.file.mimetype};base64,${b64}`
    const uploaderRes = await handleUpload(dataURI);
    res.status(200).json(uploaderRes)
    console.log(dataURI)
  }
  catch (error) {
    console.log(error)
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


