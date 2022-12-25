import {createServer} from 'node:http'
import { createReadStream } from 'node:fs';
import { text } from 'node:stream/consumers';
import route from './route.js';

const server =  createServer(async (req, res)=>{
    
    const url = new URL(req.url, `http://${req.headers.host}`)
    console.log(req.url)
    if(req.method=="POST"){
        let get_response = async function(){
            return await text(req)
        }
        get_response().then((e)=>console.log(e))
    }else{
       const routes =  await route(req.url)
    //    console.log(routes)
        routes.pipe(res);
    }
    // const file = createReadStream("templates/index.html")
    // file.pipe(res, {end:false})
    // file.on('end', ()=>{
    //     res.end()
    // })
})
server.listen("8025")