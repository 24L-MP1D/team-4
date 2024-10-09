// src/index.ts
import express, { Request, Response } from 'express';
import { postProduct } from './model/postproductmodel';
import Multer, { memoryStorage } from "multer"
import { handleUpload } from './config/cloudinary';
import connectDB from './config/db';
import { userPart } from './model/userpart';

connectDB()

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

app.post('/postProducts', async (req: Request, res: Response) => {
  try {
    const { name, text, barCode } = req.body
    const postProducts = await postProduct.create({
      name: name,
      text: text,
      BarCode: barCode
    })
    console.log(postProducts)
    res.send(postProducts);
  } catch (error) {
    console.error(error)
    res.sendStatus(404)
  }
})

app.post('/userPart', async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, phoneNumber, gmail, address } = req.body
    console.log(req.body)
    const userParts = await userPart.create({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      gmail: gmail,
      address: address,
    })
    console.log(userParts)
    res.send(userParts);
  } catch (error) {
    console.error(error)
    res.sendStatus(404)
  }
  console.log();

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