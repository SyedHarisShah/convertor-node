const express = require('express')
const app = express()
const port = 4000
const numToWord = require('./numToWords');
const wordsToNum = require('./wordsToNum');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Use Postman to check convertor, use post requests.');
});

app.post('/to/word/', (req, res) => {
  let inputNumber = req.body.number;

  inputNumber = inputNumber.toString();
  inputNumber = inputNumber.replace(/[\, ]/g, '');
  if (inputNumber != parseFloat(inputNumber)) return res.status(422).send({error: 'Incorrect, not a number'});
      
  res.send({words: numToWord(inputNumber)});
});

app.post('/to/number/', (req, res) => {
  let inputWord = req.body.words;
  
  inputWord = inputWord.toString();
  inputWord = inputWord.replace(/[\, ]/g, '');
  if (inputWord == parseFloat(inputWord)) return res.status(422).send({error: 'Incorrect, not a word'});
  
  res.send({number: wordsToNum(req.body.words)});
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});