// Dependencies
const db = require('../db/db.json');

// Back-end path routing instructions
module.exports = (app) => {
    // Returns db.json for the api notes path
    app.get('/api/notes', (req, res) => res.json(db));
    // Posts new notes to db.json using the same path
    app.post('/api/notes', (req, res) => {
        // Creates an object from user input
        const newNote = req.body;
        // Saves the note as a new entry in db.json
        db[`${newNote.title}`] = `${newNote.text}`;
    })
}