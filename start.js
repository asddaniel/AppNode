import { spawn } from "child_process"
import { watch } from "fs/promises"

const [node, _, file] = process.argv

function processus(){
    const procede = spawn(node, [file])

    procede.stdout.pipe(process.stdout)
    
    procede.stderr.pipe(process.stderr)
    procede.on("close", (code)=>{
        if(code!==null){
            process.exit(code)
        }
        console.log("process exited with "+code);

    })

   return procede;
}

let processus_enfant = processus()
const watcher  = watch("./", {recursive:true})
for await (const event of watcher){
        if(event.filename.endsWith(".js")){
            processus_enfant.kill("SIGKILL")
            processus_enfant = processus()
        }
}

