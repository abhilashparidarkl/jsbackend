const http = require('http');
const fs = require('fs');
const test1= http.createServer((req, res) => {
    console.log(req);
    console.log(req.url,req.method,req.headers);
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>1st server page</title></head>');
    res.write('<body><h1>Enter Your Details</h1></body>');
    res.write('<form action="/submit" method="POST">');
    res.write('<input type="text" name="name" placeholder="Enter your name"><br>');
    res.write('<input type="email" name="email" placeholder="Enter your email"><br>');
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="male" name="gender" value="male"/>')
    res.write('<label for="female">Female</label>')
    res.write('<input type="radio" id="female" name="gender" value="female"/><br>')
    res.write('<button type="submit"> Submit</button>');    
    res.write('</form');
    res.write('</body>');
    res.write('</html>');
    return res.end();
    }else if(req.url === '/submit' && req.method === 'POST'){
     fs.writeFileSync('formData.txt', 'Abhilash Parida');   
     res.statusCode = 302; // Redirect status code
        res.setHeader('Location', '/'); // Redirect to the home page
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>1st server page</title></head>');
    res.write('<body><h1>HELLO/CONNECT /SERVER</h1></body>');
    res.write('</html>');
    res.end();
   //process.exit();//stop evernt loop
});
const port = 3001; // Change to an unused port
test1.listen(port, () => {
    console.log(`Server is running on address http://localhost:${port}`);
});