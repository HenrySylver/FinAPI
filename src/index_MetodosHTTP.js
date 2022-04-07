const { response } = require('express');
const express = require('express');

// localhost:3333
const app = express();
app.use(express.json());
app.listen(3333);

// Tipos e parâmetros:
// ROUTE PARAMS → Identifcar um recurso
//  Editar || Edit
//  Deletar || Delete
//  Buscar || Search
//  QUERY PARAMS → Filtro de busca
//  BODY PARAMS → Inserção / Alteração de algum recurso (JSON)

// GET → Buscar uma informação dentro do servidor
app.get('/courses', (request, response) => {
  // QUERY PARAM
  const { query } = request.query;
  console.log(query);
  return response.json(['Curso 01', 'Curso 02', 'Curso 03']);
});

// POST → Inserir uma informação no servidor
app.post('/courses', (request, response) => {
  // BODY PARAM
  const { body } = request.body;
  console.log(body);
  return response.json(['Curso 01', 'Curso 02', 'Curso 03', 'Curso 04']);
});

// PUT → Alterar uma informação no servidor
app.put('/courses/:id', (request, response) => {
  // ROUTE PARAM
  const { params } = request.params;
  console.log(params);
  return response.json(['Curso 06', 'Curso 02', 'Curso 03', 'Curso 04']);
});

// PATCH → Alterar uma informação específica
app.patch('/courses/:id', (request, response) => response.json(['Curso 06', 'Curso 07', 'Curso 03', 'Curso 04']));

// DELETE → Deletar uma informação no servidor
app.delete('/courses/:id', (request, response) => response.json(['Curso 06', 'Curso 07', 'Curso 04']));
