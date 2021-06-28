const http=require('http');
const fs= require('fs');
http.createServer((req,res)=>{
    if(req.url==='/'){
        fs.createReadStream('index.html').pipe(res);
    }
    else if(req.url===('/message')&&req.method==='POST'){
        const body= [];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        req.on('end',()=>{
            const postBody=Buffer.concat(body).toString();
            const splitted=postBody.split('=');
           
            fs.writeFile('./myText.txt',splitted[1],()=>{
                
            // res.end('Sign up Successfully!!');  
            }) 
        })
    
    fs.createReadStream('index.html').pipe(res);  
}else{
    // res.end('404 page not found');
    // fs.createReadStream('index.html').pipe(res);
    res.end('404 page not found);
    }
 
}).listen(8080,()=>console.log('listening 8080'))
