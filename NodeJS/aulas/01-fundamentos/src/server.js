
import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'


const server = http.createServer( async (req, res) => {
    const { method, url } = req

    await json(req, res)

    const route = routes.find(route => route.method === method && route.path.test(url))

    if(route){
        const routeParams = req.url.match(route.path)
        req.params = { ...routeParams.groups }

        return route.handle(req, res)
    }

    return res.writeHead(404).end('404 Not found')
})


server.listen(3333) 