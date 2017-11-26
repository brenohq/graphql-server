const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphNonNull } = require('graphql')

// Hardcoded Data
const customers = [
  { id: 1, name: 'Breno Henrique', email: 'contato@brenohq.com', age: '23' },
  { id: 2, name: 'Fábio Nogueira', email: 'fabiomel@gmail.com', age: '28' },
  { id: 3, name: 'João C-ManJah', email: 'jao@outlook.com', age: '20' }
]

const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt },
  })
})

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    customer: {
      type: CustomerType,
      args: {
        id: { type: GraphQLString }
      },
      resolve (parentValue, args) {
        for (let i = 0; i < customers.length; i++) {
          if (customers[i].id == args.id) {
            return customers[i]
          }
        }
      }
    },
    customers: {
      type: new GraphQLList(CustomerType),
      resolve (parentValue, args) {
        return customers
      }
    }
  }

})

module.exports = new GraphQLSchema({
  query: RootQuery
})