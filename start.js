import { spawn } from "child_process"
import { watch } from "fs/promises"

const [node, _, file] = process.argv

function processus(){
    const process = spawn(node, [file])

    process.stdout.on("data", (data)=>{
        console.log(data.toString("utf8"))
    })
    
    process.stderr.on("data", (data)=>{
        console.error(data.toString("utf8"))
    })
    process.on("close", (code)=>{
        if(code>0){
            throw new Error("process exited with code: "+code)
        }
        console.log("process exited with "+code);

    })

   return process;
}

const processus_enfant = processus()
const watcher  = watch("./", {recursive:true})
for await (const event of watcher){
        if(event.filename.endsWith(".js")){
            processus_enfant.kill()
            processus_enfant = processus()
        }
}

