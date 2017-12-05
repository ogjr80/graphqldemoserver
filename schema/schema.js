const graphql = require('graphql');
const _ = require('lodash');


const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema} = graphql;


const students = [
  {id: '10', firstname: 'Sarah', lastname: 'Jones', age: 33},
  {id: '20', firstname: 'David', lastname: 'Moore', age: 40},
  {id: '30', firstname: 'John', lastname: 'Smith', age: 30}
]

//create the student type
const StudentType = new GraphQLObjectType({
  name: "Student",
  fields: {
    id: {type: GraphQLString},
    firstname: {type: GraphQLString},
    lastname: {type: GraphQLString},
    age: {type: GraphQLInt}
  }
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    student: {
      type: StudentType,
      args: {id: {type: GraphQLString}},
      resolve(parentValue, args){
        return _.find(students, {id: args.id});
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: RootQuery
});
