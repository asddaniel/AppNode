import {createServer} from 'node:http'
import { text } from 'node:stream/consumers';
import route from './route.js';

const server =  createServer(async (req, res)=>{
    
    // const url = new URL(req.url, `http://${req.headers.host}`)
    //method 
    console.log(req.url)
    if(req.method=="POST"){
        let get_response = async function(){
            return await text(req)
        }
        get_response().then((e)=>console.log(e))
    }else{
       const routes =  await route(req.url)
    
        routes.pipe(res);
    }
   
})
server.listen("8025")