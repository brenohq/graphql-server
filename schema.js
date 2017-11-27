const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphNonNull } = require('graphql')
const axios = require('axios')

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
        return axios.get(`http://localhost:3000/customers/${args.id}`)
          .then(res => res.data)
      }
    },
    customers: {
      type: new GraphQLList(CustomerType),
      resolve (parentValue, args) {
        return axios.get(`http://localhost:3000/customers`)
          .then(res => res.data)
      }
    }
  }

})

module.exports = new GraphQLSchema({
  query: RootQuery
})