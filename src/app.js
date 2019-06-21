const http = require('http')
const https = require('https')

http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`)
  https.get('https://www.example.com', (res2) => {
    res2.on('data', chunk => res.write(chunk))
    res2.on('end', () => res.end())
  })
})
.listen(process.env.PORT || 8080)
