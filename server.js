const express = require('express');
const connectDB = require('./config/db');
const app = express();

//database connextion
connectDB();
//middleware
app.use(express.json({ extended : false }))


//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

//serve react in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get('*', (res,req)=> res.sendFile(path.resolve(__dirname,'client','build','index.html')))
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server started on ${PORT}`));
