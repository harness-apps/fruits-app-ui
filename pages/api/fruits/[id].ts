import { NextApiRequest, NextApiResponse } from "next";

export default async function fruitsHandler(req:NextApiRequest,res:NextApiResponse){
  
  const uri = process.env.FRUITS_API_URI ? process.env.FRUITS_API_URI : 'http://localhost:8080/';

  const {
    query: { id },
    method,
  } = req;

  if (method === "DELETE"){
    console.log(`Deleting fruit with id ${id}`);
    const reqOptions = {
      method: 'DELETE'
    };
    const deleteRes = await fetch(`${uri}/fruits/${id}`,reqOptions);
    console.log(`Deleted ${JSON.stringify(deleteRes)}`);
    res.status(deleteRes.status).send(deleteRes.statusText);
  } else {
    res.setHeader('Allow', ["GET","DELETE"]);
    res.status(405).end(`Method ${method} not allowed for delete`);
  }
}
