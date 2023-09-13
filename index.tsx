import * as mongoose from 'mongoose';
import { Ping } from './schemas/ping';
import { URL } from 'url';

const pingMongo = async() => {
  await mongoose.connect('mongodb://root:example@127.0.0.1:27017/mydb?directConnection=true&serverSelectionTimeoutMS=2000&authSource=admin');
  const result = await Ping.findOneAndUpdate(
    { }, 
    { $inc: { count: 1} }, 
    { upsert: true, new: true }
  );
  
  await mongoose.disconnect();
  return result.count;
}


const server = Bun.serve({
  port: 3000,
  async fetch(req) {    
    const url = new URL(req.url);
    if (url.pathname === "/ping") {
      const pingResult = await pingMongo();
      return new Response(pingResult.toString());
    }

    return new Response("Hello Bun!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
