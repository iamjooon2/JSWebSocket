const express = require('express');

const indexRoute = require('./routes/index.js');
const userRoute = require('./routes/user.js');
const webSocket = require('./socket/socket.js');

const PORT = 3000;

const server = () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    userRoute(app);
    indexRoute(app);
    webSocket(app);
    
    app.listen(PORT, () => {
        console.log(`server is now listening to ${PORT}`);
    });
}

try {
    server(PORT);
} catch (e) {
    return e;
};