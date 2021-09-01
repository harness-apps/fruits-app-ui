import { NextApiRequest, NextApiResponse } from "next";

export default async function fruitSaveHandler(req:NextApiRequest,res:NextApiResponse){
  const uri = process.env.FRUITS_API_URI ? process.env.FRUITS_API_URI : 'http://localhost:8080/';

  console.log(`Saving ... Fruit ${JSON.stringify(req.body)}`);
  const {
    method,
  } = req;

  if (method === "POST"){
    const reqOptions = {
      body: JSON.stringify(req.body),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    };

    const saveRes = await fetch(`${uri}/fruits/add`,reqOptions);
    console.log(`Saved ${JSON.stringify(saveRes)}`);
    res.status(saveRes.status).send(saveRes.statusText);

  } else {
    res.setHeader('Allow', ["POST"]);
    res.status(405).end(`Method ${method} not allowed for save`);
  }
}
