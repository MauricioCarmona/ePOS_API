const express = require('express');
const helmet = require('helmet');
const app = express();

const { config } = require('./config/index');

const productsApi = require('./routes/products');
const clientsApi = require('./routes/clients');
const usersApi = require('./routes/users');
const shipmentsApi = require('./routes/shipments');
const shipmentItemsApi = require('./routes/shipmentItems');
const authApi = require('./routes/auth');

const {
    logErrors,
    wrapErrors,
    errorHandler,
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

//Body parser middleware
app.use(express.json());
app.use(helmet());

app.get('/', (req, res) => {
    let userInfo = req.header("user-agent");
    res.send(`UserInfo: ${userInfo}`);
  });

// Routes
authApi(app);
productsApi(app);
clientsApi(app);
usersApi(app);
shipmentsApi(app);
shipmentItemsApi(app);

// Catch 404
app.use(notFoundHandler);

app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

//Error middlewares
app.listen(config.port, function() {
  console.log(`Listening on http://localhost:${config.port}`);
});
