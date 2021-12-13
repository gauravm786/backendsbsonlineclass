const http=require("http")

const app = require("./app.js")

const server=http.createServer(app)

server.listen(3333,console.log("app is running"))