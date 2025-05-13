const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('get request /')
})

app.post('/', (req, res) => {
  res.send('post request /')
})

app.get('/user',(req,res)=>{
  res.send('get request /user')
})

app.all('/goods',(req,res)=>{
  res.send('all request /goods')
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
