import { createReadStream } from "fs"


const route =  async function(endpoint){
    
    // if(endpoint.match("accueil")){
    //     return createReadStream("templates/index.html");
    // }
    switch(endpoint){
        case '/accueil':  return createReadStream("templates/index.html");
            break;
        case '/about': return createReadStream("templates/about.html")
            break;
        case '/galerie': return createReadStream("templates/galerie.html");
            break;
        case '/css' : return createReadStream("css/index.css");
            break;
        case '/img' : return createReadStream("images/reka.jpg");
            break;
        default: return createReadStream("templates/index.html");
        break;
    }
}

export default route