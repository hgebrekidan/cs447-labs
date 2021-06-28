const http=require('http');
const fs= require('fs');
http.createServer((req,res)=>{
    if(req.url==='/'){
        fs.createReadStream('index.html').pipe(res);
    }
    else if(req.url===('/message')&&req.method==='POST'){
        const body= [];
        res.on('data',(chunk)=>{
            body.push(chunk);
        });
        res.on('end',()=>{
            const postBody=Buffer.concat(body).toString();
            console.log(postBody);
            fs.createWriteStream('myText.txt',`${postBody}`,()=>{
            res.end('Sign up Successfully!!');  
            }) 
             
            fs.createReadStream('index.html').pipe(res);

        })
    }
}).listen(8080,()=>console.log('listening 8080'))