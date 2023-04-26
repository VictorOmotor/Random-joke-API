const axios = require('axios');

const getRandomJoke = async (req, res) => {
  try {
      const response = await axios.get('https://dad-jokes.p.rapidapi.com/random/joke', {
        headers: {
          accept: 'application/json',
          'x-rapidapi-key': 'ac36004e64msh2f03d5e28e75ab5p1a32bfjsn9dc87404b637',
          'x-rapidapi-host': 'dad-jokes.p.rapidapi.com'
      }
    });
  
    res.send(response.data);
      
  } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
  }
};

module.exports = { getRandomJoke };
  