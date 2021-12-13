var http=require("http")
const app=require("./app")
var server=http.createServer(app)

server.listen(3333,console.log("app is  running"))















