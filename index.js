const fs      =     require('fs');
const path    =    require('path');
const dirPath =   path.join(__dirname,'crud_file')
const filePath  =  `${dirPath}/apple.txt`

fs.writeFileSync(filePath,'thois is it');
fs.readFile(filePath,'utf8',(err,item)=>{
console.log(item)
})

fs.appendFile(filePath,' and file name is new',(err)=>{
    if(!err) console.log("file is update")
})

fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
    if(!err) console.log("file is update")
})

fs.unlinkSync(`${dirPath}/fruit.txt`);

