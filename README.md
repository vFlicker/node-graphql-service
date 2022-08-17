# GraphQL Service

## Prerequisites

Repository with endpoints - [Download & Install](https://github.com/rolling-scopes-school/node-graphql-service)

## Downloading

```
git clone {repository URL}
```

## Installation

```
npm install
```

## Running application

Rename `.env.example` to `.env`

```
npm start
```

## Building application

```
npm run build
```

## How to use it?

1. Open a browser at http://localhost:4000/
2. Use the register mutation to create a new user
3. Use the jwt query to get a token
4. Use this token in Apollo Studio
    1. Click on the tab «Headers»
    2. Header key: Authorization
    3. Value: {received_token}
5. Enjoy using queries and mutations
