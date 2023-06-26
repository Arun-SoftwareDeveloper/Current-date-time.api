const express = require ("express")
const fs = require ("fs");
const path =require ("path");

const app = express ();

app.get("/",(req,res) =>{
    const folderPath  =  path.join("Current date-time.txt");
    const timeStamp = new Date().toString().replace(/:/g, "-")
    const fileName = `${timeStamp}.txt`;
    const filePath = path.join(folderPath,fileName);
    const fileContent = ("file Created at " + timeStamp)
fs.writeFile(filePath,fileContent,(err) =>{
    if(err){
        res.status(500).send("error "+err);
    }
    else {
        res.status(200).send(`FIle created at - ${fileName} `);
    }
});

})

app.listen(4000,() => {
    console.log(`The port is runnning on http://localhost:4000/`)
})