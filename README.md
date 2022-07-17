## GraphQL Service

### Downloading

```
git clone {repository URL}
```

### Installing

```
npm install
```

### Running application

> Rename .env.example to .env

To run application:

```
npm start
```

To build the application:

```
npm run build
```


### How use mutations
1. Create a new user using the post Postman;
1. Use jwt Query to get jwt token
1. Add this jwt token in Apollo studio, tab Headers:
    1. header key: Authorization
    1. value: {token}
1. Now you can user any mutations
