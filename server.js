const express = require('express');
const expressGraphQL = require('express-graphql');

const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
  schema, 
  graphiql:true
}))

app.get('/', function(req, res){
  res.json({Hello:  'World'})
})

app.listen(3000, function(){
  console.log('server now running on port 3000');

})
