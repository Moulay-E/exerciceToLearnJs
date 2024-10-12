const fs = require('fs');
const path = require('path');

const fileContent = "const izi = 'iei'; let caca = 55";


const name = "test2.js";
const pathFile = "./scripts/utils/hehe/";
const relativePath = path.join(pathFile, name);

const name2 = "testChanged.js";
const relativePath2 = path.join(pathFile, name2);

//if the file doest not exist
if(!fs.existsSync(relativePath)){
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
    fs.readFile(relativePath, 'utf8', (err, data)=>{
        
        if(err){
            console.log("err", err);
            return;
        }
        else{
            console.log("file read:", data);
            console.log("type", typeof(data));
            let dataCopie = data;
            let dataChanged = dataCopie += " \nlet ajout = 42;";
            console.log("dataChanged: ", dataChanged);

            fs.writeFile(relativePath2, dataChanged, (err)=>{
                if(err){
                    console.log("error dataChanged: ", err);
                }
                else{
                    console.log("datachanged created !");
                }
            })
        }
        
    } )
    console.log("the file already exist");
}
