const express = require('express');
const showsDb = require('../helpers/showsModel');

const router = express.Router();

//Create
router.post('/', (req, res) => {
    const info = req.body;
    showsDb.insert(info)
        .then(info => {
            res.status(201).json(info);
        })
        .catch(err => {
            res.status(500).json({ error: 'Error saving show to database' });
        });
});
//Read
router.get('/', (req, res) => {
    showsDb.get(req.id)
        .then(e => {
            res.status(200).json(e);
        })
        .catch(err => {
            res.status(500).json({ error: 'Error in retrieving show!' });
        });
});

//Update
router.put('/:id', (req, res) => {
    const changes = req.body;
    const id = req.params.id;
    showsDb.update(id, changes)
        .then(changes => {
            if (changes) {
                res.status(200).json(changes);
            } else {
                res.status(404).json({ message: 'Show not found' });
            }

        })
        .catch(err => {
            res.status(500).json({ error: 'error: database could not be modified' });
        });
});

//Delete
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    showsDb.remove(id)
        .then(e => {
            if (e > 0) {
                res.status(200).json({ message: 'The show has been deleted' });
            } else {
                res.status(404).json({ message: 'Show not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Show could not be removed from database' });
        });
});

//getCharacters
router.get('/:id/characters', (req, res) => {
    showsDb.getShowsCharacters(req.params.id)
        .then(e => {
            res.status(200).json(e);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not retieve info from database' });
        });
});


module.exports = router;