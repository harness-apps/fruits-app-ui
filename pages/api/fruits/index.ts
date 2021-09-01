import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse):Promise<void> {
  const uri = process.env.FRUITS_API_URI ? process.env.FRUITS_API_URI : 'http://localhost:8080/';
  //TODO handle errors
  const extRes = await fetch(`${uri}/fruits/`);
  const fruits = await extRes.json();
  if (!fruits) {
    res.status(200).json( {
      fruits: null,
      err: extRes.statusText,
      errorCode: extRes.status
    });
  }  
  console.log(`URI:${uri} response ${JSON.stringify(fruits)}`);
  res.status(extRes.status).json({
    fruits,
    err: "",
    errorCode: extRes.status
  });
}
