require('dotenv').config({path: "./config.env"});
const epxress = require('express');
const connectDB = require('./config/db');

const errorHandler = require('./middleware/error');
//DB Connection
connectDB();

const app = epxress();

app.use(epxress.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));

//Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

process.on("unhandledRejection", (err,promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1));
})