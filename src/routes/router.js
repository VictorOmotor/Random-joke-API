const express = require('express');
const router = express.Router();
const { getRandomJoke } = require('../controller/joke.controller');

router.get('/', getRandomJoke);

module.exports = {jokeRouter: router};
