const express = require('express');
const charDb = require('../helpers/charactersModel');

const router = express.Router();

//Create
router.post('/', (req, res) => {
    const charInfo = req.body;
    charDb.insert(charInfo)
        .then(charInfo => {
            res.status(201).json(charInfo);
        })
        .catch(err => {
            res.status(500).json({ error: 'Error saving character to database' });
        });
});

//Read
router.get('/', (req, res) => {
    const id = req.params.id;
    charDb.get(id)
        .then(e => {
            res.status(200).json(e);
        })
        .catch(err => {
            res.status(500).json({ error: 'Error retrieving info from database' });
        });
});
//Update
router.put('/:id', (req, res) => {
    const changes = req.body;
    const id = req.params.id;
    charDb.update(id, changes)
        .then(changes => {
            if (changes) {
                res.status(200).json(changes);
            } else {
                res.status(404).json({ message: 'Character not found' });
            }
        });
});

//Delete
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    charDb.remove(id)
        .then(e => {
            if (e > 0) {
                res.status(200).json({ message: 'The character has been deleted' });
            } else {
                res.status(404).json({ message: 'Character not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Character could not be removed from the database' });
        });
});

module.exports = router;