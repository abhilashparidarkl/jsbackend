const http = require('http');
const test1= http.createServer((req, res) => {
    console.log(req);
    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type', 'json');
    res.write('<html>')
    res.write('<head><title>complete coding</title></head>');
    res.write('<body><h1>complete coding</h1></body>');
    res.write('</html>');
    res.end();
   //process.exit();//stop evernt loop
});
//test1.listen(3000);
const port = 3000;
test1.listen(port, () => {
    console.log(`Server is running on address http://localhost: ${port}`);
});