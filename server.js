const express = require('express');
const connectDB = require('./config/db');
const app = express();

//database connextion
connectDB();
//middleware
app.use(express.json({ extended : false }))

app.get('/', (req,res)=>{
    res.send('home')
})

//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server started on ${PORT}`));
