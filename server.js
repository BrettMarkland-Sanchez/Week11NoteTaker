// Dependencies
const express = require('express');

// Creates the Express app and defines the port
const app = express();
const PORT = 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Starts the App Listener
app.listen(process.env.PORT || PORT, () => console.log("Server running on port: ", PORT));