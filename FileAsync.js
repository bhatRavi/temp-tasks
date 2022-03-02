const {readFile,writeFile} = require('fs')

readFile('./mainFolder/app.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    
    const data1 = result;
    console.log(data1);
    
readFile('./mainFolder/TEXT.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    const data2 = result;
    

  
  writeFile(
      './mainFolder/result_asynch.txt',
      `here is the files : ${data1},${data2}`,
      (err,result)=>{
          if(err){
              console.log(err)
              return
          }
          console.log(result),
          {flag : 'a'}
      })



})
  
})
