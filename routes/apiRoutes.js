// Dependencies
const db = require('../db/db.json');

// Back-end path routing instructions
module.exports = (app) => {
    // Returns db.json for the api notes path
    app.get('/api/notes', (req, res) => res.json(db));
}