const express = require('express'); 
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRouter = require('./routers/authRouter');
const viewRouter = require('./routers/viewRouter');
const errorController = require('./controllers/errorController');
const jwtSecret = process.env.JWT_SECRET;

const app = express();
app.use(cors());
app.use(morgan('tiny'));

//serve static files from react app 
app.use(express.static(path.join(__dirname, 'react/build')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser(jwtSecret));

app.use('/', viewRouter);
app.use('/auth/', authRouter);

app.get('*', (req, res) =>{
	res.sendFile(path.join(__dirname+'/react/build/index.html'));
});

app.use(errorController); 

module.exports = app; 


