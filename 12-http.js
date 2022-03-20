const http = require('http');

const server = http.createServer( (req, res) => {
    try {
        if(req.url === '/'){
            res.end('Welcome to our home page');
        }
        else if(req.url === '/about'){
            res.end('Here is our short history');
        }
        else{
            res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you're looking for.</p>
            <a href='/'>back home</a>
            `
            );
        }
    } catch (err) {
        console.error(err.message);
    }
})

server.listen(5000);