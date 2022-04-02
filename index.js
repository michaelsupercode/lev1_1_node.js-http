const http = require("http")
const fs = require("fs")
const PORT = 9001
const errorPage = fs.readFileSync("./public/html/error.html")

const server = http.createServer((req, res) => {
    console.log("neue request", req.method, req.url)

    const pageName = req.url === "/" ? "/index.html" : req.url
    const fileEnding = pageName.endsWith(".html") ? "" : ".html"
    const filePath = "./public/html" + pageName + fileEnding

    fs.readFile(filePath, (err, indexHtmlData) => {
        if (err) {
            res.write("errorPage")
            res.end()
        } else {
            res.write(indexHtmlData)
            res.end()
        }
    })
})

server.listen(PORT)
console.log("server ready at port", PORT)