const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000

const mainRouter = jsonServer.router('api/mocks/main.json')

server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(mainRouter)

server.listen(port, () => {
    console.log('Conecta - Mock Server is running')
})