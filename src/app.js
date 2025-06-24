const express=require('express');
const aiRoutes=require('./routes/ai.routes.js')
const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');


const app=express()
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST'],
  credentials: true
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/ai', aiRoutes);





module.exports=app;