const http = require('http')
const https = require('https')
const request = require('request-promise')

http.createServer(async (req, res) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`)
  const body = await request('https://www.example.com')
  res.end(body)
})
.listen(process.env.PORT || 8080)
