const express = require('express');
const helmet = require('helmet');
const server = express();
const showsRouter = require('./data/shows/showsRouter.js');
const charRouter = require('./data/characters/charactersRouter');

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.status(200).json({ message: 'The server is online!' });
});

server.use('/api/shows', showsRouter);
server.use('/api/characters', charRouter);

module.exports = server;