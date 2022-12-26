import {createServer} from 'node:http'
import { text } from 'node:stream/consumers';
import { buffer } from 'stream/consumers';
import route from './route.js';

const server =  createServer(async (req, res)=>{
    
     const url = new URL(req.url, `http://${req.headers.host}`)
    //method  getparameters
     console.log(req.buffer)
    if(req.method=="POST"){
        let get_response = async function(){
            return await buffer(req)
        }
        get_response().then((e)=>{
            res.end(e);
        })
    }else{
       const routes =  await route(req.url)
    
        routes.pipe(res);
    }
   
})
server.listen("8025")