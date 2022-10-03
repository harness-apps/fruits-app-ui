import { NextApiRequest, NextApiResponse } from "next";

export default async function fruitSaveHandler(req:NextApiRequest,res:NextApiResponse):Promise<void> {
  const uri = process.env.FRUITS_API_URI ? process.env.FRUITS_API_URI : 'http://localhost:8080/api/v1';

  const {
    body,
    method,
  } = req;

  console.log(`Method: ${method}, Saving ... Fruit ${JSON.stringify(body)}`);

  if (method === "POST"){
    const reqOptions = {
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    };

    try {
      const saveRes = await fetch(`${uri}/fruits/add`,reqOptions);
      console.log(`Saved ${JSON.stringify(saveRes)}`);
      res.status(saveRes.status).send(saveRes.statusText);
    } catch (err){
      console.error(`Error Saving ${JSON.stringify(err)}`);
    }
  } else {
    res.setHeader('Allow', ["POST"]);
    res.status(405).end(`Method ${method} not allowed for save`);
  }
}
