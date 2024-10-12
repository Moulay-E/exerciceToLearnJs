const fs = require('fs');
const path = require('path');

const fileContent = "const izi = 'iei'";


const name = "test2.js";
const pathFile = "./scripts/utils/hehe/";
const relativePath = path.join(pathFile, name);

//if the file doest not exist
if(!fs.existsSync(pathFile)){
    //create the file and the path if the path does not exist too (with recursive)
    fs.mkdirSync(pathFile, {recursive : true} );

    //create the file and show if a error appear
    fs.writeFile(relativePath, fileContent, (err)=>{
        if(err){
            console.log("error ! ", err);
        }
        else{
            console.log("fichier crée ! path:", pathFile);
        }
    })
}
else{
    console.log("the file already exist");
}
