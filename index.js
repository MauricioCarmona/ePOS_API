const express = require('express');
const app = express();

const { config } = require('./config/index');

const productsApi = require('./routes/products');
const clientsApi = require('./routes/clients');

const {
    logErrors,
    wrapErrors,
    errorHandler,
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

//Body parser middleware
app.use(express.json());

// Routes
productsApi(app);
clientsApi(app);

// Catch 404
app.use(notFoundHandler);

app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

//Error middlewares
app.listen(config.port, function() {
  console.log(`Listening on http://localhost:${config.port}`);
});
