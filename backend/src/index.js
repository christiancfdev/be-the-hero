const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3333);
/**
* Rota / Recurso
 */

 /**
  * Métodos HTTP: 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

 /**
  * Tipos de parâmetros: 
  * 
  * Query Params: Parâmetros nomeados enviados na rota após os símbolos para (filtros,  paginação)
  * Route Params: Parâmetros utilizados para identificar recursos.
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
  * 
  */

  /**
   * O 'request' guarda todos os dados que vem através da nossa requisição.
   * O 'response' é o responsável por retornar uma resposta para o usuário.
   * 
   */

   /**
    * Bancos de Dados
    * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc.
    */

   /**
    * Conexão com o Banco
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select(*)
    * 
    * Para iniciar a conexão com o banco : npx knex init
    */



