const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to Homepage')
        return
     
 
    }
    if(req.url === '/about'){
        res.end('Here is some homePage details')
        return
       
    }

    res.end(`
        <h1>Oops..</h1>
        <p>Something went wrong........!!!!</p>
        <a href = "/">Back Home</a>
    `)

    
   
})
server.listen(5000)