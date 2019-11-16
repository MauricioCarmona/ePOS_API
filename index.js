const express = require('express');
const app = express();

const { config } = require('./config/index');

const productsApi = require('./routes/products');

const { logErrors, errorHandler } = require('./utils/middleware/errorHandlers');

//Body parser middleware
app.use(express.json());

productsApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, function() {
    console.log(`Listening on http://localhost:${config.port}`);
});
