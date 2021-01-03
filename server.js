const app = require('./app');
const mongoose = require('mongoose'); 
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const port = process.env.PORT || 5000; 
const db = process.env.DATABASE; 

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(connection => {
    console.log(`db is successful`); 
})

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});