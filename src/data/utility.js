import axios from 'axios';

ingredientData.forEach(ingredient => {
  axios.post('http://homestead.test/api/options', ingredient);
});

//use this is we need to bulk upload our ingredients again. 