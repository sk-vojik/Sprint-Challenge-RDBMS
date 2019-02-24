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

server.get('/api/projects', async (req, res) => {
  try {
    const projects = await db('projects');
    if (projects) {
      return res.status(200).json(projects);
    } else {
      res.status(404).json({ error: "We were unable to get projects at this time"})
    }
  } catch (error) {
    return res.status(500).json({ error: "We were unable to get projects at this time"})
  }
});

server.get('/api/actions', async (req, res) => {
  try {
    const actions = await db('actions');
    if (actions) {
      return res.status(200).json(actions)
    } else {
      res.status(404).json({ error: "We were unable to get project actions at this time"})
    }
  } catch (error) {
    res.status(500).json({ error: "We were unable to get project actions at this time"})
  }
});

server.get('/api/projects/:id', async (req, res) => {
  try {
    const project = await db('projects').where({ id: req.params.id });
    const actions = await db('actions').where({ project_id: req.params.id })
    if (actions && project) {
      return res.status(200).json({ project, actions });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

server.post('/api/projects', async (req, res) => {
  try {
    const project = await db('projects').insert(req.body);
    if (project) {
      return res.status(200).json({ message: "Project created successfully"})
    } else {
      return res.status(404).json({ error: "The project could not be added at this time"})
    }
  } catch (error) {
    return res.status(500).json({ error: "The project could not be added at this time"})
  }
});

server.post('/api/actions', async (req, res) => {
  try {
    const action = await db('actions').insert(req.body);
    if (action) {
      return res.status(200).json({ message: "Action created successfully"})
    } else {
      return res.status(404).json({ error: "The project action could not be added at this time"})
    }
  } catch (error) {
    return res.status(500).json({ error: "The action could not be added at this time"})
  }
});


const port = process.env.PORT || 7000;
server.listen(port, () => console.log(`\n***running on ${port}***\n`))