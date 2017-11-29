# graphql-server
Node.js/Express CRUD backend using GraphQL and JSON-Server

### Version
0.0.1

## Usage

#### First, Install Dependencies

```bash
$ npm install
```

#### Run JSON-Server (Port 3000)

```bash
$ npm run json:server
```

#### Run Server (Port 4000)

```bash
$ npm run dev:server
```

#### Visit Graphiql IDE
Go to http://localhost:4000/graphql

#### Query examples to reproduce

- Retrieve all the customers
```javascript
{
  customers {
    id,
    name,
    email,
    age
  }
}
```

- Find a specific customer by id and retrieve your name and email
```javascript
{
  customer(id: "2") {
    name,
    email
  }
}
```

- Delete a customer by id and retriever the email field (null)
```javascript
mutation {
  deleteCustomer(id: "29") {
    email
  }
}
```

- Edits an existent customer by id and retriever your id and name fields
```javascript
mutation {
  editCustomer(id: "1", name: "Breno Henrique") {
    id,
    name
  }
}
```

- Find a customer by id and retrieve your name and your purchases
```javascript
{
  customer(id: "1") {
    name
    purchases {
      id,
      product_id,
      total_spent
    }
  }
}
```