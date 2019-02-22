const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: './data/projects.sqlite3'
  }
}

const db = knex(knexConfig);

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.json("it's workingggg!!!!")
});

const port = process.env.PORT || 7000;
server.listen(port, () => console.log(`\n***running on ${port}***\n`))