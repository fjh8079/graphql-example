const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors()) 

mongoose.connect('mongodb://jessicafu:test123@ds143588.mlab.com:43588/graphql-example')
mongoose.connection.once('open', () => {
  console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('now listen for request on port 4000.');
})