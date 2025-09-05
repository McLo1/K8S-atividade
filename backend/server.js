const express = require('express')

const app = express();
app.use(express.json());
let todos = [];

app.get('/api/todos', (req,res)=> res.json(todos));
app.post('/api/todos', (req,res)=> { todos.push(req.body); res.json({msg:'Adicionado'}); });
app.delete('/api/todos/:id', (req, res) => { const { id } = req.params;  res.json({ msg: 'Removido' });});

app.listen(3000, ()=> console.log('Backend rodando na porta 3000'));